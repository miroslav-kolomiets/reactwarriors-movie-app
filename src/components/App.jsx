import React from 'react';
import Filters from './Filters/Filters';
import MoviesList from './Movies/MoviesList';
import {API_URL, API_KEY_3} from '../api/api';

export default class App extends React.Component {
  constructor () {
    super ();

    this.state = {
      filters: {
        sort_by: 'popularity.desc',
        primary_release_year: undefined,
        with_genres: [],
      },
      page: 1,
      genres: [],
      movies: [],
      total_pages: 0,
    };

    this.onChangeGenresFilters = this.onChangeGenresFilters.bind (this);
  }

  getMovies = (filters, page) => {
    const {sort_by, primary_release_year, with_genres} = filters;
    const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=ru-RU&sort_by=${sort_by}&page=${page}&primary_release_year=${primary_release_year}&with_genres=${with_genres}`;

    fetch (link)
      .then (response => {
        return response.json ();
      })
      .then (data => {
        this.setState ({
          movies: data.results,
          total_pages: data.total_pages,
        });
      });
  };

  getGenres = () => {
    const link = `${API_URL}/genre/movie/list?api_key=${API_KEY_3}&language=en-US`;

    fetch (link)
      .then (response => {
        return response.json ();
      })
      .then (data => {
        this.setState ({
          genres: data.genres,
        });
      });
  };

  onChangeGenresFilters (event) {
    const value = event.target.value;
    const with_genres = this.state.filters.with_genres;
    if (with_genres.includes (value)) {
      var newGenres = with_genres.filter (genre => genre !== value);
      this.setState ({
        filters: {
          ...this.state.filters,
          with_genres: newGenres,
        },
      });
    } else {
      this.setState ({
        filters: {
          ...this.state.filters,
          with_genres: [...this.state.filters.with_genres, value],
        },
      });
    }
  }

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
    this.setState ({
      filters: {
        sort_by: 'popularity.desc',
        primary_release_year: undefined,
        with_genres: [],
      },
    });
  };

  onChangePage = page => {
    this.setState ({
      page,
    });
  };

  render () {
    const {filters, page} = this.state;
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-4">
            <div className="card" style={{width: '100%'}}>
              <div className="card-body">
                <h3>Фильтры:</h3>
                <Filters
                  page={page}
                  genres={this.state.genres}
                  filters={filters}
                  resetFilters={this.resetFilters}
                  total_pages={this.state.total_pages}
                  onChangePage={this.onChangePage}
                  onChangeGenresFilters={this.onChangeGenresFilters}
                  getGenres={this.getGenres}
                  onChangeFilters={this.onChangeFilters}
                />
              </div>
            </div>
          </div>
          <div className="col-8">
            <MoviesList
              page={page}
              movies={this.state.movies}
              getMovies={this.getMovies}
              filters={this.state.filters}
              onChangePage={this.onChangePage}
            />
          </div>
        </div>
      </div>
    );
  }
}
