import React from 'react';

export default class Pagination extends React.Component {
  paginationBack = () => {
    const {onChangePagination, page} = this.props;
    return onChangePagination ({name: 'page', value: page - 1});
  };

  paginationForward = () => {
    const {onChangePagination, page} = this.props;
    return onChangePagination ({name: 'page', value: page + 1});
  };

  render() {
    const {page, total_pages} = this.props;

    return (
      <div>
        <div
          className="btn-group btn-block"
          role="group"
          aria-label="Basic example"
        >
          <button
            type="button"
            className="btn btn-light"
            disabled={page === 1}
            onClick={this.paginationBack}
          >
            Назад
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={this.paginationForward}
          >
            Вперед
          </button>
        </div>
        <p className="text-center p-3 text-center">{`${page} из ${total_pages}`}</p>
      </div>
    );
  }
}
