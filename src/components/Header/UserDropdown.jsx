import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {AppContext} from "../App";
import {API_URL, API_KEY_3, fetchApi} from '../../api/api';

class UserMenu extends React.Component {
  state = {
    dropdownOpen: false
  };

  toggleDropdown = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  handleLogOut = () => {
    fetchApi(`${API_URL}/authentication/session?api_key=${API_KEY_3}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        session_id: this.props.session_id
      })
    }).then(() => {
      this.props.onLogOut();
    })
  };

  render() {
    const {user} = this.props;

    return (
      <Dropdown
        isOpen={this.state.dropdownOpen}
        toggle={this.toggleDropdown}
      >
        <DropdownToggle
          tag="div"
          onClick={this.toggleDropdown}
          data-toggle="dropdown"
          aria-expanded={this.state.dropdownOpen}
        >
          <img
            width="40"
            className="rounded-circle"
            src={`https://secure.gravatar.com/avatar/${user.avatar.gravatar.hash}.jpg?s=64"`}
            alt="avatar"
            onClick={this.toggleDropdown}
          >
          </img>
        </DropdownToggle>
        <DropdownMenu
          right
        >
          <DropdownItem
            onClick={this.handleLogOut}
          >
            Выйти
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

const UserMenuContainer = (props) => {
  return (
    <AppContext.Consumer>
      {(context) => {
        return (
          <UserMenu
            {...context}
            {...props}
          />
        )
      }}
    </AppContext.Consumer>
  )
};

UserMenuContainer.displayName = "UserMenuContainer";

export default UserMenuContainer;
