import React from 'react';
import Axios from 'axios';
import { DispatchContext } from '../../context';

const API_LOGIN_URL = 'http://localhost:8080/login';

function HeaderForm() {

  const myDispatch = React.useContext(DispatchContext);

  const [userName, setUserName] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');

  const setUserToLocalStorage = (name, item) => {
    localStorage.setItem(name, JSON.stringify(item));
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    const request = { username: userName, password: userPassword };

    try {
      const response = await Axios.post(API_LOGIN_URL, request);
      if (response.data) {
        myDispatch.logInDispatch({type: 'login'})
        myDispatch.messageDispatch({type: 'add_message', payload: 'Succefully logged in.'})
        setUserToLocalStorage('userData', response.data)
      } else {
        alert('wrong info');
      }
    } catch (err) {
      console.error(`error: ${err}`);
    }
  };
  return (
    <form onSubmit={handleFormSubmit} className="mb-0 pt-2 pt-md-0">
      <div className="row align-items-center">
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input
            name="username"
            className="form-control form-control-sm input-dark"
            type="text"
            placeholder="Username"
            autoComplete="off"
            onChange={e => setUserName(e.target.value)}
            value={userName}
          />
        </div>
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input
            name="password"
            className="form-control form-control-sm input-dark"
            type="password"
            placeholder="Password"
            autoComplete="off"
            onChange={e => setUserPassword(e.target.value)}
            value={userPassword}
          />
        </div>
        <div className="col-md-auto">
          <button className="btn btn-success btn-sm">Sign In</button>
        </div>
      </div>
    </form>
  );
}

export default HeaderForm;
