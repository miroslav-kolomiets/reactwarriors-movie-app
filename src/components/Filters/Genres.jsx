import React from 'react';
import PropTypes from 'prop-types';
import {API_URL, API_KEY_3} from '../../api/api';

export default class Genres extends React.Component {
  static propTypes = {
    with_genres: PropTypes.array.isRequired,
    onChangeFilters: PropTypes.func.isRequired,
  };

  constructor() {
    super ();

    this.state = {
      genres: [],
    };
  }

  onChangeGenresFilters = event => {
    const value = event.target.value;
    const name = event.target.name;
    const with_genres = this.props.with_genres;

    this.props.onChangeFilters ({
      target: {
        name,
        value: with_genres.includes (value)
          ? with_genres.filter (genre => genre !== value)
          : [...with_genres, value],
      },
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

  componentDidMount() {
    this.getGenres ();
  }

  render() {
    const {genres} = this.state;
    return (
      <div>
        {genres.map (genre => {
          return (
            <div className="form-check" key={genre.id}>
              <input
                className="form-check-input"
                type="checkbox"
                onChange={this.onChangeGenresFilters}
                name="with_genres"
                value={genre.id}
                checked={this.props.with_genres.includes(genre.id.toString())}
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
