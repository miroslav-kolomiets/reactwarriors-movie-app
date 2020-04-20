import {Media} from "reactstrap";
import React from "react";

const MovieOverview = (props) => {
  const { movie } = props;
  return (
    <Media className='media-film-card'>
      {
        movie &&
          <>
            <Media
              object
              className='media-film-card__img'
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
              alt=""
            />
            <Media body className='media-film-card__body'>
            <Media heading className='media-film-card__heading'>
              {movie.title}
            </Media>
              {movie.overview}
            </Media>
          </>
      }
    </Media>
  )
}

export default MovieOverview;
