import React from 'react';
import Header from './Header/Header';
import Filters from './Filters/Filters';
import MoviesList from './Movies/MoviesList';
import Cookies from 'universal-cookie';
import {API_URL, API_KEY_3, fetchApi} from '../api/api';

const cookies = new Cookies ();

export const AppContext = React.createContext();

export default class App extends React.Component {
  constructor() {
    super ();

    this.state = {
      user: null,
      favoritesMovies: null,
      watchlistMovies: null,
      session_id: null,
      filters: {
        sort_by: 'popularity.desc',
        primary_release_year: '',
        with_genres: [],
      },
      pagination: {
        page: 1,
        total_pages: 0,
      },
    };
  }

  updateUser = user => {
    this.setState ({user});
  };

  updateSessionId = session_id => {
    cookies.set ('session_id', session_id, {path: '/', maxAge: 2592000});
    this.setState ({session_id});
  };

  updateFavoritesMovies = favoritesMovies => {
    this.setState ({favoritesMovies});
  };

  updateWatchlistMovies = watchlistMovies => {
    this.setState ({watchlistMovies});
  };


  onLogOut = () => {
    cookies.remove('session_id');
    this.setState({
      session_id: null,
      user: null
    })
  };

  onChangeFilters = event => {
    const name = event.target.name;
    const value = event.target.value;
    const newFilters = {
      ...this.state.filters,
      [name]: value,
    };
    this.setState ({
      filters: newFilters,
    });
  };

  resetFilters = () => {
    this.setState (prevProps => ({
      filters: {
        sort_by: 'popularity.desc',
        primary_release_year: '',
        with_genres: [],
      },
      pagination: {
        page: 1,
        total_pages: 0,
      },
    }));
  };

  onChangePagination = ({name, value}) => {
    this.setState (prevState => ({
      pagination: {
        ...prevState.pagination,
        [name]: value,
      },
    }));
  };

  componentDidMount() {
    const session_id = cookies.get ('session_id');
    if (session_id) {
      fetchApi (
        `${API_URL}/account?api_key=${API_KEY_3}&session_id=${session_id}`
      ).then (user => {
        this.updateUser (user);
        this.updateSessionId(session_id);
      }).then( () => {
          fetchApi (
            `${API_URL}/account/${this.state.user.id}/favorite/movies?api_key=${API_KEY_3}&session_id=${session_id}`
          ).then (favoritesMovies => {
            this.updateFavoritesMovies (favoritesMovies.results);
            console.log('favoritesMovies');
            console.log(favoritesMovies.results);
          })
        }
      ).then( () => {
          fetchApi (
            `${API_URL}/account/${this.state.user.id}/watchlist/movies?api_key=${API_KEY_3}&session_id=${session_id}`
          ).then (watchlistMovies => {
            this.updateWatchlistMovies (watchlistMovies.results);
            console.log('watchlistMovies');
            console.log(watchlistMovies.results);
          })
        }
      )
    }
  }

  render() {
    const {filters, pagination, page, total_pages, user, session_id, favoritesMovies, watchlistMovies} = this.state;
    return (
      <AppContext.Provider value={{
        user,
        favoritesMovies,
        watchlistMovies,
        session_id,
        updateUser: this.updateUser,
        updateSessionId: this.updateSessionId,
        onLogOut: this.onLogOut
      }}>
        <div>
          <Header
            updateUser={this.updateUser}
            updateSessionId={this.updateSessionId}
            user={user}
          />
          <div className="container">
            <div className="row mt-4">
              <div className="col-4">
                <div className="card" style={{width: '100%'}}>
                  <div className="card-body">
                    <h3>Фильтры:</h3>
                    <Filters
                      page={page}
                      total_pages={total_pages}
                      pagination={pagination}
                      filters={filters}
                      resetFilters={this.resetFilters}
                      onChangePagination={this.onChangePagination}
                      onChangeFilters={this.onChangeFilters}
                    />
                  </div>
                </div>
              </div>
              <div className="col-8">
                <MoviesList
                  pagination={pagination}
                  movies={this.state.movies}
                  getMovies={this.getMovies}
                  filters={this.state.filters}
                  onChangePagination={this.onChangePagination}
                />
              </div>
            </div>
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}
