import React from 'react';
import PropTypes from 'prop-types';

const year = new Date ().getFullYear ();
const years = Array.from (new Array (20), (val, index) => year - index);

export default class SortByYear extends React.Component {
  static propTypes = {
    primary_release_year: PropTypes.string.isRequired,
    onChangeFilters: PropTypes.func.isRequired,
  };

  render () {
    const {primary_release_year, onChangeFilters} = this.props;

    return (
      <div className="form-group">
        <label htmlFor="primary_release_year">Год выпуска:</label>
        <select
          className="form-control"
          id="primary_release_year"
          name="primary_release_year"
          value={primary_release_year}
          onChange={onChangeFilters}
        >
          {years.map (year => {
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
