import React from 'react';
import Filters from './Filters/Filters';
import MoviesList from './Movies/MoviesList';

export default class App extends React.Component {
  constructor () {
    super ();

    this.state = {
      filters: {
        sort_by: 'popularity.desc',
      },
      page: 1,
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

  onChangePage = page => {
    this.setState ({
      page,
    });
  };

  render () {
    const {filters, page} = this.state;
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-4">
            <div className="card" style={{width: '100%'}}>
              <div className="card-body">
                <h3>Фильтры:</h3>
                <Filters
                  page={page}
                  filters={filters}
                  onChangePage={this.onChangePage}
                  onChangeFilters={this.onChangeFilters}
                />
              </div>
            </div>
          </div>
          <div className="col-8">
            <MoviesList
              page={page}
              filters={this.state.filters}
              onChangePage={this.onChangePage}
            />
          </div>
        </div>
      </div>
    );
  }
}
