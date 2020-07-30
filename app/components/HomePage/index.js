import React from 'react';
import Page from '../Page';
import Axios from 'axios';

const API_REGISTER_URL = 'http://localhost:8080/register';
const initialFormData = {
  username: '',
  email: '',
  password: ''
};

const errorUserMessage = 'User name must be 4 characters in length or more.';
const errorPasswordMessage =
  'Password lenght must be 12 characters in length or more.';

export default function HomePage() {
  const [formData, setFormData] = React.useState(initialFormData);
  const [formErrorMessage, setFormErrorMessage] = React.useState([]);

  const handleInputChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const isFormValid = formDataObject => {
    for (const item in formDataObject) {
      // console.log(`${item}: ${formDataObject[item]}`);
    }
  };

  const handleFormSubmit = async e => {
    e.preventDefault();

    if (true) {
      try {
        await Axios.post(API_REGISTER_URL, formData);
        alert('Success');
      } catch (err) {
        // console.error(`error: ${err}`);
      }
    }
  };

  return (
    <Page name={'Home Page'} wide>
      <div className="row align-items-center">
        <div className="col-lg-7 py-3 py-md-5">
          <h1 className="display-3">Remember Writing?</h1>
          <p className="lead text-muted">
            Are you sick of short tweets and impersonal &ldquo;shared&rdquo;
            posts that are reminiscent of the late 90&rsquo;s email forwards? We
            believe getting back to actually writing is the key to enjoying the
            internet again.
          </p>
        </div>
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="username-register" className="text-muted mb-1">
                <small>Username</small>
              </label>
              <input
                id="username-register"
                name="username"
                className="form-control"
                type="text"
                placeholder="Pick a username"
                autoComplete="off"
                onChange={handleInputChange}
                value={formData.username}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email-register" className="text-muted mb-1">
                <small>Email</small>
              </label>
              <input
                id="email-register"
                name="email"
                className="form-control"
                type="email"
                placeholder="you@example.com"
                autoComplete="off"
                onChange={handleInputChange}
                value={formData.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password-register" className="text-muted mb-1">
                <small>Password</small>
              </label>
              <input
                id="password-register"
                name="password"
                className="form-control"
                type="password"
                placeholder="Create a password"
                autoComplete="off"
                onChange={handleInputChange}
                value={formData.password}
              />
            </div>
            <button
              type="submit"
              className="py-3 mt-4 btn btn-lg btn-success btn-block"
            >
              Sign up for ComplexApp
            </button>
            {formErrorMessage.length === 0 ? (
              <h1>No errors</h1>
            ) : (
              <h1>Errors</h1>
            )}
          </form>
        </div>
      </div>
    </Page>
  );
}
