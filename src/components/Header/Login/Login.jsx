import React from 'react';
import {API_URL, API_KEY_3} from '../../../api/api';
import {Modal, ModalBody} from 'reactstrap';

export default class Login extends React.Component {
  sendPromises = async() => {
    const fetchApi = (url, options = {}) => {
      return new Promise ((resolve, reject) => {
        fetch (url, options)
          .then (response => {
            if (response.status < 400) {
              return response.json ();
            } else {
              throw response;
            }
          })
          .then (data => {
            resolve (data);
          })
          .catch (response => {
            response.json ().then (error => {
              reject (error);
              console.log ('error', error);
            });
          });
      });
    };

    try {
      const data = await fetchApi (
        `${API_URL}/authentication/token/new?api_key=${API_KEY_3}`
      );

      const result = await fetchApi (
        `${API_URL}/authentication/token/validate_with_login?api_key=${API_KEY_3}`,
        {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify ({
            username: 'iammiro',
            password: 'c17bc429',
            request_token: data.request_token,
          }),
        }
      );

      const {
        session_id,
      } = await fetchApi (
        `${API_URL}/authentication/session/new?api_key=${API_KEY_3}`,
        {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify ({
            request_token: result.request_token,
          }),
        }
      );
      console.log (session_id);
    } catch (error) {
      console.log ('error', error);
    }
    // fetchApi (`${API_URL}/authentication/token/new?api_key=${API_KEY_3}`)
    //   .then (data => {
    //     return fetchApi (
    //       `${API_URL}/authentication/token/validate_with_login?api_key=${API_KEY_3}`,
    //       {
    //         method: 'POST',
    //         mode: 'cors',
    //         headers: {
    //           'Content-type': 'application/json',
    //         },
    //         body: JSON.stringify ({
    //           username: 'iammiro',
    //           password: 'c17bc429',
    //           request_token: data.request_token,
    //         }),
    //       }
    //     );
    //   })
    //   .then (data => {
    //     return fetchApi (
    //       `${API_URL}/authentication/session/new?api_key=${API_KEY_3}`,
    //       {
    //         method: 'POST',
    //         mode: 'cors',
    //         headers: {
    //           'Content-type': 'application/json',
    //         },
    //         body: JSON.stringify ({
    //           request_token: data.request_token,
    //         }),
    //       }
    //     ).then (data => {
    //       console.log ('session', data);
    //     });
    //   })
    //   .catch (error => {
    //     console.log (error);
    //   });
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-success"
          type="button"
          onClick={this.sendPromises}
        >
          Login
        </button>
      </div>
    );
  }
}
