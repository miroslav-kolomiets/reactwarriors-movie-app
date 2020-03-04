import React from 'react';
import UserMenu from './UserDropdown';
import AppContextHOC from '../HOC/AppContextHOC';

class Header extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
          </ul>
          {user ? (
            <UserMenu />
          ) : (
            <div>
              <button
                className="btn btn-success"
                type="button"
                onClick={this.props.toggleModal}
              >
                Login
              </button>
            </div>
          )}
        </div>
      </nav>
    );
  }
}

export default AppContextHOC(Header);
