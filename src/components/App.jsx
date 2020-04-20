import React from 'react';
import Header from './Header/Header';
import MoviesPages from './pages/MoviesPage/MoviesPage';
import MoviePages from './pages/MoviePage/MoviePage';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Cookies from 'universal-cookie';
import CallApi from '../api/api';
import LoginModal from './Login/LoginModal';

const cookies = new Cookies();

export const AppContext = React.createContext();

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null,
      favoritesMovies: null,
      watchlistMovies: null,
      session_id: null,
      showModal: false,
    };
  }

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  updateUser = user => {
    this.setState({user});
  };

  updateSessionId = session_id => {
    cookies.set('session_id', session_id, {path: '/', maxAge: 2592000});
    this.setState({session_id});
  };

  updateFavoritesMovies = favoritesMovies => {
    this.setState({favoritesMovies});
  };

  updateWatchlistMovies = watchlistMovies => {
    this.setState({watchlistMovies});
  };

  onLogOut = () => {
    cookies.remove('session_id');
    this.setState({
      session_id: null,
      user: null,
    });
  };

  getFavoritesMovies = session_id => {
    CallApi.get(`/account/${this.state.user.id}/favorite/movies`, {
      params: {
        session_id: session_id
      }
    }).then(favoritesMovies => {
      this.updateFavoritesMovies(favoritesMovies.results);
    })
  };

  getWatchlistMovies = session_id => {
    CallApi.get(`/account/${this.state.user.id}/watchlist/movies`, {
      params: {
        session_id: session_id
      }
    }).then(watchlistMovies => {
      this.updateWatchlistMovies(watchlistMovies.results);
    })
  };

  componentDidMount() {
    const session_id = cookies.get('session_id');
    if (session_id) {
      CallApi.get(
        `/account`, {
          params: {
            session_id: session_id,
          }
        }
      )
        .then(user => {
          this.updateUser(user);
          this.updateSessionId(session_id);
        })
        .then(() => {
          this.getFavoritesMovies(session_id);
        })
        .then(() => {
          this.getWatchlistMovies(session_id);
        });
    }
  }

  render() {
    const {
      user,
      session_id,
      showModal,
      favoritesMovies,
      watchlistMovies,
    } = this.state;
    return (
      <Router>
        <AppContext.Provider
          value={{
            user,
            favoritesMovies,
            watchlistMovies,
            session_id,
            showModal,
            toggleModal: this.toggleModal,
            updateUser: this.updateUser,
            updateSessionId: this.updateSessionId,
            onLogOut: this.onLogOut,
            getFavoritesMovies: this.getFavoritesMovies,
            getWatchlistMovies: this.getWatchlistMovies,
          }}
        >
          <div>
            {this.state.showModal && (
              <LoginModal isOpen={this.state.showModal} toggle={this.toggleModal}/>)}
            <Header />
            <Route path="/" exact component={MoviesPages} />
            <Route path="/movie/:id" component={MoviePages} />
          </div>
        </AppContext.Provider>
      </Router>
    );
  }
}
