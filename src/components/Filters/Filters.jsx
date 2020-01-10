import React from 'react';
import PropTypes from 'prop-types';
import SortBy from './SortBy';
import Genres from './Genres';
import SortByYear from './SortByYear';
import Pagination from '../Pagination/Pagination';
import ResetFilters from './ResetFilters';

export default class Filters extends React.Component {
  static propTypes = {
    filters: PropTypes.object.isRequired,
    onChangeFilters: PropTypes.func.isRequired,
    onChangePagination: PropTypes.func.isRequired,
    resetFilters: PropTypes.func.isRequired,
  };

  render() {
    const {
      filters: { sort_by, primary_release_year, with_genres },
      pagination: { page, total_pages },
      onChangePagination,
      resetFilters,
      onChangeFilters,
    } = this.props;

    return (
      <form className="mb-3">
        <SortBy sort_by={sort_by} onChangeFilters={onChangeFilters} />
        <SortByYear
          primary_release_year={primary_release_year}
          onChangeFilters={onChangeFilters}
        />
        <Genres with_genres={with_genres} onChangeFilters={onChangeFilters} />
        <Pagination
          onChangePagination={onChangePagination}
          total_pages={total_pages}
          page={page}
        />
        <ResetFilters resetFilters={resetFilters} />
      </form>
    );
  }
}
