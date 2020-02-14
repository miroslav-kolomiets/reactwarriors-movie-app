import React from 'react';
import CallApi from '../../api/api';
import IconButton from '@material-ui/core/IconButton';
import {Bookmark, BookmarkBorder} from '@material-ui/icons';
import AppContextHOC from '../HOC/AppContextHOC';

class Watchlist extends React.Component {
  constructor() {
    super();

    this.state = {
      isInWatchlist: null,
    };
  }

  toggleWatchlist = (id, session_id, isInWatchlist) => {
    if (session_id) {
      CallApi.post(
        `/account/${this.props.user.id}/watchlist`, {
          params: {
            session_id: session_id
          },
          body: {
            media_type: 'movie',
            media_id: id,
            watchlist: isInWatchlist,
          }
        }
      ).then(() => {
        this.setState({
          isInWatchlist,
        });
      });
    } else {
      this.props.toggleModal();
    }
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!(this.props.watchlistMovies === prevProps.watchlistMovies)) {
      const {id, watchlistMovies} = this.props;
      if (watchlistMovies) {
        let watchlistMoviesIds = watchlistMovies.map(movie => {
          return movie.id;
        });
        if (watchlistMoviesIds.includes(id)) {
          this.setState({
            isInWatchlist: true,
          });
        } else {
          this.setState({
            isInWatchlist: false,
          });
        }
      }
    }
  }

  render() {
    const {id, session_id} = this.props;
    const {isInWatchlist} = this.state;

    if (isInWatchlist) {
      return (
        <div>
          <IconButton
            aria-label=""
            onClick={() => this.toggleWatchlist(id, session_id, false)}
          >
            <BookmarkBorder/>
          </IconButton>
        </div>
      );
    } else {
      return (
        <IconButton
          aria-label=""
          onClick={() => this.toggleWatchlist(id, session_id, true)}
        >
          <Bookmark/>
        </IconButton>
      );
    }
  }
}

export default AppContextHOC(Watchlist);
