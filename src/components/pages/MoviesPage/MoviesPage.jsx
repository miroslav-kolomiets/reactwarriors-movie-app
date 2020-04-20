import React from 'react';
import Filters from '../../Filters/Filters';
import MoviesList from '../../Movies/MoviesList';
import CallApi from '../../../api/api';

export default class MoviesPage extends React.Component {
  constructor() {
    super();

    this.state = {
      favoritesMovies: null,
      watchlistMovies: null,
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

  updateFavoritesMovies = favoritesMovies => {
    this.setState({favoritesMovies});
  };

  updateWatchlistMovies = watchlistMovies => {
    this.setState({watchlistMovies});
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

  render() {
    const {
      filters,
      pagination,
      page,
      total_pages,
    } = this.state;
    return (
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
    );
  }
}
