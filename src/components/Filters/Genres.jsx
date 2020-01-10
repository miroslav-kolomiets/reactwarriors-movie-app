import React from 'react';
import PropTypes from 'prop-types';
import GenresHOC from './GenresHOC';

const Genres = ({ genres, onChangeGenresFilters, with_genres }) => {
  return (
    <div>
      {genres.map(genre => {
        return (
          <div className="form-check" key={genre.id}>
            <input
              className="form-check-input"
              type="checkbox"
              onChange={onChangeGenresFilters}
              name="with_genres"
              value={genre.id}
              checked={with_genres.includes(genre.id.toString())}
              id={genre.id}
            />
            <label className="form-check-label" htmlFor="defaultCheck1">
              {genre.name}
            </label>
          </div>
        );
      })}
    </div>
  );
};

Genres.defaultProps = {
  genres: [],
};

Genres.propTypes = {
  genres: PropTypes.array.isRequired,
};

export default GenresHOC(Genres);
