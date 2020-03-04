import React from 'react';
import Header from './Header/Header';
import Filters from './Filters/Filters';
import MoviesList from './Movies/MoviesList';
import Cookies from 'universal-cookie';
import CallApi from '../api/api';
import LoginModal from './Login/LoginModal';

const cookies = new Cookies();

export const AppContext = React.createContext();

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null,
      favoritesMovies: null,
      watchlistMovies: null,
      session_id: null,
      showModal: false,
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

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  updateUser = user => {
    this.setState({user});
  };

  updateSessionId = session_id => {
    cookies.set('session_id', session_id, {path: '/', maxAge: 2592000});
    this.setState({session_id});
  };

  updateFavoritesMovies = favoritesMovies => {
    this.setState({favoritesMovies});
  };

  updateWatchlistMovies = watchlistMovies => {
    this.setState({watchlistMovies});
  };

  onLogOut = () => {
    cookies.remove('session_id');
    this.setState({
      session_id: null,
      user: null,
    });
  };

  onChangeFilters = event => {
    const name = event.target.name;
    const value = event.target.value;
    const newFilters = {
      ...this.state.filters,
      [name]: value,
    };
    this.setState({
      filters: newFilters,
    });
  };

  resetFilters = () => {
    this.setState(prevProps => ({
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
    this.setState(prevState => ({
      pagination: {
        ...prevState.pagination,
        [name]: value,
      },
    }));
  };

  getFavoritesMovies = session_id => {
    CallApi.get(`/account/${this.state.user.id}/favorite/movies`, {
      params: {
        session_id: session_id
      }
    }).then(favoritesMovies => {
      this.updateFavoritesMovies(favoritesMovies.results);
    })
  };

  getWatchlistMovies = session_id => {
    CallApi.get(`/account/${this.state.user.id}/watchlist/movies`, {
      params: {
        session_id: session_id
      }
    }).then(watchlistMovies => {
      this.updateWatchlistMovies(watchlistMovies.results);
    })
  };

  componentDidMount() {
    const session_id = cookies.get('session_id');
    if (session_id) {
      CallApi.get(
        `/account`, {
          params: {
            session_id: session_id,
          }
        }
      )
        .then(user => {
          this.updateUser(user);
          this.updateSessionId(session_id);
        })
        .then(() => {
          this.getFavoritesMovies(session_id);
        })
        .then(() => {
          this.getWatchlistMovies(session_id);
        });
    }
  }

  render() {
    const {
      filters,
      pagination,
      page,
      total_pages,
      user,
      session_id,
      showModal,
      favoritesMovies,
      watchlistMovies,
    } = this.state;
    return (
      <AppContext.Provider
        value={{
          user,
          favoritesMovies,
          watchlistMovies,
          session_id,
          showModal,
          toggleModal: this.toggleModal,
          updateUser: this.updateUser,
          updateSessionId: this.updateSessionId,
          onLogOut: this.onLogOut,
          getFavoritesMovies: this.getFavoritesMovies,
          getWatchlistMovies: this.getWatchlistMovies,
        }}
      >
        <div>
          {this.state.showModal && (
            <LoginModal isOpen={this.state.showModal} toggle={this.toggleModal}/>)}
          <Header />
          <div className="container">
            <div className="row mt-4">
              <div className="col-4">
                <div className="card">
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
