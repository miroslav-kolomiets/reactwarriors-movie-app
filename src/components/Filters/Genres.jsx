import React from 'react';

export default class Genres extends React.Component {
  componentDidMount () {
    this.props.getGenres ();
  }

  render () {
    const {onChangeGenresFilters, genres} = this.props;
    return (
      <div>
        {genres.map (genre => {
          return (
            <div className="form-check" key={genre.id}>
              <input
                className="form-check-input"
                type="checkbox"
                onChange={onChangeGenresFilters}
                name={genre.name}
                value={genre.id}
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
  }
}
