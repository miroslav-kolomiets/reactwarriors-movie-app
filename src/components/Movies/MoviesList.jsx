import React, {Component} from 'react';
import MovieItem from './MovieItem';

export default class MovieList extends Component {
  componentDidMount () {
    this.props.getMovies (this.props.filters, this.props.page);
  }

  componentDidUpdate (prevProps) {
    if (
      this.props.filters.sort_by !== prevProps.filters.sort_by ||
      this.props.filters.primary_release_year !==
        prevProps.filters.primary_release_year ||
      this.props.filters.with_genres !== prevProps.filters.with_genres
    ) {
      this.props.getMovies (this.props.filters, 1);
      this.props.onChangePage (1);
    }

    if (this.props.page !== prevProps.page) {
      this.props.getMovies (this.props.filters, this.props.page);
    }
  }

  render () {
    const movies = this.props.movies;
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
