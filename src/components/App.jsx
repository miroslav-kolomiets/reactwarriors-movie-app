import React from 'react';
import Filters from './Filters/Filters';
import MoviesList from './Movies/MoviesList';

export default class App extends React.Component {
  constructor() {
    super ();

    this.state = {
      filters: {
        sort_by: 'popularity.desc',
        primary_release_year: '',
        with_genres: [],
      },
      pagination: {
        page: 1,
        total_pages: 0,
      },
    };
  }

  onChangeFilters = event => {
    const name = event.target.name;
    const value = event.target.value;
    const newFilters = {
      ...this.state.filters,
      [name]: value,
    };
    this.setState ({
      filters: newFilters,
    });
  };

  resetFilters = () => {
    this.setState (prevProps => ({
      filters: {
        sort_by: 'popularity.desc',
        primary_release_year: '',
        with_genres: [],
      },
      pagination: {
        page: 1,
        total_pages: 0,
      },
    }));
  };

  onChangePagination = ({name, value}) => {
    this.setState (prevState => ({
      pagination: {
        ...prevState.pagination,
        [name]: value,
      },
    }));
  };

  render() {
    const {filters, pagination} = this.state;
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-4">
            <div className="card" style={{width: '100%'}}>
              <div className="card-body">
                <h3>Фильтры:</h3>
                <Filters
                  pagination={pagination}
                  filters={filters}
                  resetFilters={this.resetFilters}
                  onChangePagination={this.onChangePagination}
                  onChangeFilters={this.onChangeFilters}
                />
              </div>
            </div>
          </div>
          <div className="col-8">
            <MoviesList
              pagination={pagination}
              movies={this.state.movies}
              getMovies={this.getMovies}
              filters={this.state.filters}
              onChangePagination={this.onChangePagination}
            />
          </div>
        </div>
      </div>
    );
  }
}
