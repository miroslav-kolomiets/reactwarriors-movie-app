import React from 'react';
import {Modal, ModalBody} from 'reactstrap';
import LoginForm from './LoginForm';
import AppContextHOC from '../../HOC/AppContextHOC';

class LoginModal extends React.Component {

  render() {
    return (
      <div>
        <Modal isOpen={this.props.showModal} toggle={this.props.toggleModal}>
          <ModalBody>
            <LoginForm
              updateUser={this.props.updateUser}
              updateSessionId={this.props.updateSessionId}
            />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default AppContextHOC(LoginModal);
