import React from 'react';
import CallApi from '../../api/api';
import IconButton from '@material-ui/core/IconButton';
import {Bookmark, BookmarkBorder} from '@material-ui/icons';
import AppContextHOC from '../HOC/AppContextHOC';

class Watchlist extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: null,
    };
  }

  toggleWatchlist = (id, session_id) => {
    if (session_id) {
      this.setState({
        isLoading: true,
      });
      CallApi.post(
        `/account/${this.props.user.id}/watchlist`, {
          params: {
            session_id: session_id
          },
          body: {
            media_type: 'movie',
            media_id: id,
            watchlist: !this.isInWatchlist(),
          }
        }
      ).then(() => {
        this.props.getWatchlistMovies(session_id);
      }).then(() => {
        this.setState({
          isLoading: false,
        });
      });
    } else {
      this.props.toggleModal();
    }
  };

  isInWatchlist = () => {
    return this.props.watchlistMovies ? this.props.watchlistMovies.findIndex(
      movie => movie.id === this.props.id
    ) !== -1 : false;
  };

  render() {
    const {id, session_id} = this.props;
    const {isLoading} = this.state;

    if (this.isInWatchlist()) {
      return (
        <div>
          <IconButton
            style={isLoading ? { 'pointer-events': 'none' } : {'pointer-events': 'auto'}}
            onClick={() => this.toggleWatchlist(id, session_id)}
          >
            <BookmarkBorder/>
          </IconButton>
        </div>
      );
    } else {
      return (
        <IconButton
          style={isLoading ? { 'pointer-events': 'none' } : {'pointer-events': 'auto'}}
          onClick={() => this.toggleWatchlist(id, session_id)}
        >
          <Bookmark/>
        </IconButton>
      );
    }
  }
}

export default AppContextHOC(Watchlist);
