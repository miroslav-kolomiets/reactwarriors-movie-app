import React from 'react';
import User from './User';
import Login from './Login/Login';

class Header extends React.Component {
  render() {
    const {user} = this.props;
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home</a>
            </li>
          </ul>
          {user
            ? <User />
            : <Login updateSessionId={this.props.updateSessionId}/>}
        </div>
      </nav>
    );
  }
}

export default Header;
