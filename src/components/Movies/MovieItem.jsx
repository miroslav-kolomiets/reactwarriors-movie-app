import React from 'react';
import { ButtonGroup } from 'reactstrap';
import Favorite from './Favorite';
import Watchlist from './Watchlist';

const MovieItem = props => {
  const { item } = props;
  return (
    <div className="card" style={{ width: '100%' }}>
      <img
        className="card-img-top card-img--height"
        src={`https://image.tmdb.org/t/p/w500${item.backdrop_path ||
          item.poster_path}`}
        alt=""
      />
      <div className="card-body">
        <h6 className="card-title">{item.title}</h6>
        <div className="card-text">Рейтинг: {item.vote_average}</div>
        <div className="card-text">Релиз: {item.release_date}</div>
      </div>
      <ButtonGroup>
        <Favorite item={item} />
        <Watchlist item={item} />
      </ButtonGroup>
    </div>
  );
};

export default MovieItem;
