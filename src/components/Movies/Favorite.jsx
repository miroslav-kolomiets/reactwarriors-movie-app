import React from 'react';
import CallApi from '../../api/api';
import IconButton from '@material-ui/core/IconButton';
import {Star, StarBorder} from '@material-ui/icons';
import AppContextHOC from '../HOC/AppContextHOC';

class Favorite extends React.Component {
  constructor() {
    super();

    this.state = {
      isFavorite: null,
    };
  }

  toggleFavorite = (id, session_id, isFavorite) => {
    if (session_id) {
      CallApi.post(
        `/account/${this.props.user.id}/favorite`, {
          params: {
            session_id: session_id
          },
          body: {
            media_type: 'movie',
            media_id: id,
            favorite: isFavorite,
          }
        }
      ).then(() => {
        this.setState({
          isFavorite,
        });
      });
    } else {
      this.props.toggleModal();
    }
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.favoritesMovies !== prevProps.favoritesMovies) {
      const {id, favoritesMovies} = this.props;
      if (favoritesMovies) {
        let favoritesMoviesIds = favoritesMovies.map(movie => {
          return movie.id;
        });
        if (favoritesMoviesIds.includes(id)) {
          this.setState({
            isFavorite: true,
          });
        } else {
          this.setState({
            isFavorite: false,
          });
        }
      }
    }
  }

  render() {
    const {id, session_id} = this.props;
    const {isFavorite} = this.state;

    if (isFavorite) {
      return (
        <div>
          <IconButton
            aria-label=""
            onClick={() => this.toggleFavorite(id, session_id, false)}
          >
            <StarBorder/>
          </IconButton>
        </div>
      );
    } else {
      return (
        <IconButton
          aria-label=""
          onClick={() => this.toggleFavorite(id, session_id, true)}
        >
          <Star/>
        </IconButton>
      );
    }
  }
}

export default AppContextHOC(Favorite);
