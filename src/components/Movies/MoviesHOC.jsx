import React, { Component } from 'react';
import _ from 'lodash';
import queryString from 'query-string';
import CallApi, { API_URL, API_KEY_3 } from '../../api/api';

export default Component =>
  class MoviesHOC extends React.Component {
    constructor() {
      super();

      this.state = {
        movies: [],
      };
    }

    getMovies = (filters, pagination) => {
      const { sort_by, primary_release_year, with_genres } = filters;
      const { page } = pagination;
      const queryStringParams = {
        api_key: API_KEY_3,
        sort_by: sort_by,
        page: page,
        primary_release_year: primary_release_year,
        with_genres: with_genres,
        language: 'ru-RU',
      };

      CallApi.get('/discover/movie', {
        params: queryStringParams,
      }).then(data => {
        this.setState({
          movies: data.results,
        });
        this.props.onChangePagination({
          name: 'total_pages',
          value: data.total_pages,
        });
      });
    };

    componentDidMount() {
      this.getMovies(this.props.filters, this.props.pagination);
    }

    componentDidUpdate(prevProps) {
      if (!_.isEqual(this.props.filters, prevProps.filters)) {
        this.getMovies(this.props.filters, 1);
        this.props.onChangePagination(1);
      }

      if (this.props.pagination.page !== prevProps.pagination.page) {
        this.getMovies(this.props.filters, this.props.pagination);
      }
    }

    render() {
      const { movies } = this.state;
      return <Component movies={movies} />;
    }
  };
