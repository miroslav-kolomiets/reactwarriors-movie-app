import React from 'react';
import {Link} from 'react-router-dom';
import {ButtonGroup} from 'reactstrap';
import Favorite from './Favorite';
import Watchlist from './Watchlist';

const MovieItem = props => {
  const {item} = props;
  return (
    <div className="card">
      <img
        className="card-img-top card-img--height"
        src={`https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`}
        alt=""
      />
      <div className="card-body">
        <Link className="card-title" to={`/movie/${item.id}`}>{item.title}</Link>
        <div className="card-text">Рейтинг: {item.vote_average}</div>
        <div className="card-text">Релиз: {item.release_date}</div>
      </div>
      <ButtonGroup>
        <Favorite id={item.id}/>
        <Watchlist id={item.id}/>
      </ButtonGroup>
    </div>
  );
};

export default MovieItem;
