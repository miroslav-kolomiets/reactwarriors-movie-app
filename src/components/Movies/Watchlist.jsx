import React from 'react';
import {API_URL, API_KEY_3, fetchApi} from '../../api/api';
import IconButton from '@material-ui/core/IconButton';
import { Bookmark, BookmarkBorder } from '@material-ui/icons';
import {AppContext} from "../App";
import {Modal, ModalBody} from 'reactstrap';
import LoginForm from '../Header/Login/LoginForm';

class Watchlist extends React.Component {
  constructor() {
    super();

    this.state = {
      isInWatchlist: null,
      showModal: false,
    }
  }

  toggleModal = () => {
    this.setState (prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  addToFav = (item, session_id) => {
    if (session_id) {
      // console.log(item);
      fetchApi(`${API_URL}/account/7933447/watchlist?api_key=${API_KEY_3}&session_id=${session_id}`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          media_type: 'movie',
          media_id: item.id,
          watchlist: true
        })
      }).then(() => {
        this.setState({
          isInWatchlist: true
        })
      })
    } else {
      this.toggleModal();
    }
  };

  removeFromFav = (item, session_id) => {
    if (session_id) {
      // console.log(item);
      fetchApi(`${API_URL}/account/7933447/watchlist?api_key=${API_KEY_3}&session_id=${session_id}`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          media_type: 'movie',
          media_id: item.id,
          watchlist: false
        })
      }).then(() => {
        this.setState({
          isInWatchlist: false
        })
      })
    } else {
      this.toggleModal();
    }
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!(this.props.watchlistMovies === prevProps.watchlistMovies)) {
      const {item, watchlistMovies} = this.props;
      if (watchlistMovies) {
        let watchlistMoviesIds = watchlistMovies.map(movie => {
          return movie.id;
        });
        // console.log(watchlistMoviesIds);
        if (watchlistMoviesIds.includes(item.id)) {
          this.setState({
            isInWatchlist: true
          })
        } else {
          this.setState({
            isInWatchlist: false
          })
        }
      }
    }
  }

  render() {
    const {item, session_id, user} = this.props;
    const {isInWatchlist} = this.state;

    if (isInWatchlist) {
      return (
        <div>
          <IconButton aria-label="" onClick={() => this.removeFromFav(item, session_id)}>
            <BookmarkBorder />
          </IconButton>
        </div>
      );
    } else {
      return (
        <div>
          {user
            ? null
            : <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
              <ModalBody>
                <LoginForm
                  updateUser={this.props.updateUser}
                  updateSessionId={this.props.updateSessionId}
                />
              </ModalBody>
            </Modal>
          }
          <IconButton aria-label="" onClick={() => this.addToFav(item, session_id)}>
            <Bookmark />
          </IconButton>
        </div>
      );
    }
  }
}

const WatchlistContainer = (props) => {
  return (
    <AppContext.Consumer>
      {(context) => {
        return (
          <Watchlist
            {...context}
            {...props}
          />
        )
      }}
    </AppContext.Consumer>
  )
};

WatchlistContainer.displayName = "WatchlistContainer";

export default WatchlistContainer;
