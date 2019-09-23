import React from 'react';
import SortBy from './SortBy';

export default class Filters extends React.Component {
  render () {
    const {
      page,
      filters: {sort_by},
      onChangePage,
      onChangeFilters,
    } = this.props;

    return (
      <form className="mb-3">
        <SortBy sord_by={sort_by} onChangeFilters={onChangeFilters} />
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-light"
            disabled={page === 1}
            onClick={onChangePage.bind (null, page - 1)}
          >
            Назад
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={onChangePage.bind (null, page + 1)}
          >
            Вперед
          </button>
        </div>
      </form>
    );
  }
}
