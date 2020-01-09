import React from 'react';
import {API_URL, API_KEY_3, fetchApi} from '../../api/api';
import IconButton from '@material-ui/core/IconButton';
import { Star, StarBorder } from '@material-ui/icons';
import {AppContext} from "../App";

class Favorite extends React.Component {
  constructor() {
    super();

    this.state = {
      isFavorite: null,
    }
  }

  addToFav = (item, session_id) => {
    // console.log(item);
    fetchApi(`${API_URL}/account/7933447/favorite?api_key=${API_KEY_3}&session_id=${session_id}`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        media_type: 'movie',
        media_id: item.id,
        favorite: true
      })
    }).then(() => {
      this.setState({
        isFavorite: true
      })
    })
  };

  removeFromFav = (item, session_id) => {
    // console.log(item);
    fetchApi(`${API_URL}/account/7933447/favorite?api_key=${API_KEY_3}&session_id=${session_id}`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        media_type: 'movie',
        media_id: item.id,
        favorite: false
      })
    }).then(() => {
      this.setState({
        isFavorite: false
      })
    })
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.favoritesMovies !== prevProps.favoritesMovies) {
      const {item, favoritesMovies} = this.props;
      if (favoritesMovies) {
        let favoritesMoviesIds = favoritesMovies.map(movie => {
          return movie.id;
        });
        // console.log(favoritesMoviesIds);
        if (favoritesMoviesIds.includes(item.id)) {
          this.setState({
            isFavorite: true
          })
        } else {
          this.setState({
            isFavorite: false
          })
        }
      }
    }
  }

  render() {
    const {isFavorite} = this.state;
    const {item, session_id} = this.props;
    if (isFavorite) {
      return (
        <div>
          <IconButton aria-label="" onClick={() => this.removeFromFav(item, session_id)}>
            <StarBorder />
          </IconButton>
        </div>
      );
    } else {
      return (
        <div>
          <IconButton aria-label="" onClick={() => this.addToFav(item, session_id)}>
            <Star />
          </IconButton>
        </div>
      );
    }
  }
}

const FavoriteContainer = (props) => {
  return (
    <AppContext.Consumer>
      {(context) => {
        return (
          <Favorite
            {...context}
            {...props}
          />
        )
      }}
    </AppContext.Consumer>
  )
};

FavoriteContainer.displayName = "FavoriteContainer";

export default FavoriteContainer;
