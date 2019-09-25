import React from 'react';
import SortBy from './SortBy';
import Genres from './Genres';
import SortByYear from './SortByYear';

export default class Filters extends React.Component {
  render () {
    const {
      page,
      filters: {sort_by, primary_release_year},
      onChangePage,
      genres,
      resetFilters,
      getGenres,
      onChangeGenresFilters,
      onChangeFilters,
      total_pages,
    } = this.props;

    return (
      <form className="mb-3">
        <SortBy sort_by={sort_by} onChangeFilters={onChangeFilters} />
        <SortByYear
          primary_release_year={primary_release_year}
          onChangeFilters={onChangeFilters}
        />
        <Genres
          genres={genres}
          getGenres={getGenres}
          onChangeGenresFilters={onChangeGenresFilters}
        />
        <div
          className="btn-group btn-block"
          role="group"
          aria-label="Basic example"
        >
          <button
            type="button"
            className="btn btn-light"
            disabled={page === 1}
            onClick={onChangePage.bind (null, page - 1)}
          >
            Назад
          </button>
          <p className="text-center p-3">{`${page} из ${total_pages}`}</p>
          <button
            type="button"
            className="btn btn-light"
            onClick={onChangePage.bind (null, page + 1)}
          >
            Вперед
          </button>
        </div>
        <div
          className="btn-group btn-block"
          role="group"
          aria-label="Basic example"
        >
          <button
            type="button"
            className="btn btn-light btn-block"
            onClick={resetFilters}
          >
            Сбросить фильтры
          </button>
        </div>
      </form>
    );
  }
}
