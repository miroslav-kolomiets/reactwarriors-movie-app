import React from 'react';
import CallApi from '../../api/api';
import AppContextHOC from '../HOC/AppContextHOC';

class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
    errors: {},
    submitting: false,
  };

  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleBlur = e => {
    const errors = this.validateFields();
    const name = e.target.name;
    if (errors[name]) {
      this.setState(state => ({
        errors: {
          ...state.errors,
          [name]: errors[name],
        },
      }));
    }
  };

  validateFields = () => {
    const errors = {};

    if (this.state.username === '') {
      errors.username = 'Not empty';
    }

    if (this.state.password === '') {
      errors.password = 'Not empty';
    }

    return errors;
  };

  onSubmit = () => {
    this.setState({
      submitting: true,
    });

    CallApi.get(`/authentication/token/new`)
      .then(data => {
        return CallApi.post(
          `/authentication/token/validate_with_login`, {
            params: {
              username: this.state.username,
              password: this.state.password,
              request_token: data.request_token,
            }
          }
        );
      })
      .then(data => {
        return CallApi.post(
          `/authentication/session/new`, {
            params: {
              request_token: data.request_token,
            }
          }
        );
      })
      .then(data => {
        this.props.updateSessionId(data.session_id);
        return CallApi.get(
          `/account`, {
            params: {
              session_id: data.session_id,
            }
          }
        );
      })
      .then(user => {
        this.setState(
          {
            submitting: false,
          },
          () => {
            this.props.updateUser(user);
          }
        );
      })
      .catch(error => {
        console.log('error', error);
        this.setState({
          submitting: false,
          errors: {
            base: error.status_message,
          },
        });
      });
  };

  onLogin = e => {
    e.preventDefault();
    const errors = this.validateFields();
    if (Object.keys(errors).length > 0) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          ...errors,
        },
      }));
    } else {
      this.onSubmit();
    }
  };

  render() {
    const { username, password, errors, submitting } = this.state;
    return (
      <div className="form-login-container">
        <form className="form-login">
          <h1 className="h3 mb-3 font-weight-normal text-center">
            Авторизация
          </h1>
          <div className="form-group">
            <label htmlFor="username">Пользователь</label>
            <input
              type="text"
              className={
                errors.username ? 'form-control is-invalid' : 'form-control'
              }
              id="username"
              placeholder="Пользователь"
              name="username"
              value={username}
              onChange={this.onChange}
              onBlur={this.handleBlur}
            />
            {errors.username && (
              <div className="invalid-feedback">{errors.username}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              className={
                errors.password ? 'form-control is-invalid' : 'form-control'
              }
              id="password"
              placeholder="Пароль"
              name="password"
              value={password}
              onChange={this.onChange}
              onBlur={this.handleBlur}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-lg btn-primary btn-block"
            onClick={this.onLogin}
            disabled={submitting}
          >
            Вход
          </button>
          {errors.base && (
            <div className="invalid-feedback text-center">{errors.base}</div>
          )}
        </form>
      </div>
    );
  }
}

export default AppContextHOC(LoginForm);
