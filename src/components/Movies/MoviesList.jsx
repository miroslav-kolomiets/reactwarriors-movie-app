import React from 'react';
import MovieItem from './MovieItem';
import { Spinner } from 'reactstrap';
import PropsTypes from 'prop-types';
import MoviesHOC from './MoviesHOC';

const MoviesList = ({ movies }) => {
  return (
    <div>
      <div className="loader-wrapper">
        {movies.length === 0 && <Spinner color="primary" />}
      </div>
      <div className="row">
        {movies.map(movie => {
          return (
            <div key={movie.id} className="col-6 mb-4">
              <MovieItem item={movie} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

MoviesList.defaulProps = {
  movies: [],
};

MoviesList.propTypes = {
  movies: PropsTypes.array.isRequired,
};

export default MoviesHOC(MoviesList);
