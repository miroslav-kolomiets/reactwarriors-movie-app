import React from 'react';
import PropTypes from 'prop-types';

export default class ResetFilters extends React.Component {
  static propTypes = {
    resetFilters: PropTypes.func.isRequired,
  };

  render () {
    return (
      <div
        className="btn-group btn-block"
        role="group"
        aria-label="Basic example"
      >
        <button
          type="button"
          className="btn btn-light btn-block"
          onClick={this.props.resetFilters}
        >
          Сбросить фильтры
        </button>
      </div>
    );
  }
}
