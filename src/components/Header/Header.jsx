import React from 'react';
import User from './User';
import Login from './Login/Login';

class Header extends React.Component {
  render () {
    const {user, updateUser} = this.props;
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link">Home</a>
            </li>
          </ul>
          {user
            ? <User user={user} />
            : <Login
                updateUser={updateUser}
                updateSessionId={this.props.updateSessionId}
              />}
        </div>
      </nav>
    );
  }
}

export default Header;
