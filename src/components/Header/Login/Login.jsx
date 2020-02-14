import React from 'react';
import Modal from './Modal';
import AppContextHOC from '../../HOC/AppContextHOC';

const Login = (props) => {
  return (
    <div>
      <button
        className="btn btn-success"
        type="button"
        onClick={props.toggleModal}
      >
        Login
      </button>
      <Modal />
    </div>
  );
};

export default AppContextHOC(Login);
