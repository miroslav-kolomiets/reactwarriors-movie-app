import React, {Component} from 'react';
import MovieItem from './MovieItem';
import {API_URL, API_KEY_3} from '../../api/api';
import _ from 'lodash';

export default class MovieList extends Component {
  constructor () {
    super ();

    this.state = {
      movies: [],
    };
  }

  getMovies = (filters, pagination) => {
    const {sort_by, primary_release_year, with_genres} = filters;
    const {page} = pagination;
    const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=ru-RU&sort_by=${sort_by}&page=${page}&primary_release_year=${primary_release_year}&with_genres=${with_genres}`;

    fetch (link)
      .then (response => {
        return response.json ();
      })
      .then (data => {
        this.setState ({
          movies: data.results,
        });
        this.props.onChangePagination ({
          name: 'total_pages',
          value: data.total_pages,
        });
      });
  };

  componentDidMount () {
    this.getMovies (this.props.filters, this.props.pagination);
  }

  componentDidUpdate (prevProps) {
    if (!_.isEqual (this.props.filters, prevProps.filters)) {
      this.getMovies (this.props.filters, 1);
      this.props.onChangePagination (1);
    }

    if (this.props.pagination.page !== prevProps.pagination.page) {
      this.getMovies (this.props.filters, this.props.pagination);
    }
  }

  render () {
    const movies = this.state.movies;
    return (
      <div className="row">
        {movies.map (movie => {
          return (
            <div key={movie.id} className="col-6 mb-4">
              <MovieItem item={movie} />
            </div>
          );
        })}
      </div>
    );
  }
}
