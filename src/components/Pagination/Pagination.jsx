import React from 'react';

export default class Pagination extends React.Component {
  render () {
    const {page, total_pages, onChangePagination} = this.props;

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
            // Вопрос о том как правильно биндить функции внутри рендера потому что я запутался в вариантах.
            // В нете видел даже варианты с использованием (::) но у меня такой вариант не заработал. Линтер выдает ошибку.
            onClick={() =>
              onChangePagination ({
                name: 'page',
                value: page - 1,
              })}
          >
            Назад
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={() =>
              onChangePagination ({
                name: 'page',
                value: page + 1,
              })}
          >
            Вперед
          </button>
        </div>
        <p className="text-center p-3 text-center">{`${page} из ${total_pages}`}</p>
      </div>
    );
  }
}
