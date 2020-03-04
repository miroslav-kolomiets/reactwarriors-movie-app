import React from 'react';
import CallApi from '../../api/api';
import IconButton from '@material-ui/core/IconButton';
import {Star, StarBorder} from '@material-ui/icons';
import AppContextHOC from '../HOC/AppContextHOC';

class Favorite extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: null,
    };
  }

  toggleFavorite = (id, session_id) => {
    if (session_id) {
      this.setState({
        isLoading: true,
      });
      CallApi.post(
        `/account/${this.props.user.id}/favorite`, {
          params: {
            session_id: session_id
          },
          body: {
            media_type: 'movie',
            media_id: id,
            favorite: !this.isFavorite(),
          }
        }
      ).then(() => {
        this.props.getFavoritesMovies(session_id);
      }).then(() => {
        this.setState({
          isLoading: false,
        });
      });
    } else {
      this.props.toggleModal();
    }
  };

  isFavorite = () => {
    return this.props.favoritesMovies ? this.props.favoritesMovies.findIndex(
      movie => movie.id === this.props.id
    ) !== -1 : false;
  };

  render() {
    const {id, session_id} = this.props;
    const {isLoading} = this.state;

    if (this.isFavorite()) {
      return (
        <div>
          <IconButton
            style={isLoading ? { 'pointer-events': 'none' } : {'pointer-events': 'auto'}}
            onClick={() => this.toggleFavorite(id, session_id)}
          >
            <StarBorder/>
          </IconButton>
        </div>
      );
    } else {
      return (
        <IconButton
          style={isLoading ? { 'pointer-events': 'none' } : {'pointer-events': 'auto'}}
          onClick={() => this.toggleFavorite(id, session_id)}
        >
          <Star/>
        </IconButton>
      );
    }
  }
}

export default AppContextHOC(Favorite);
