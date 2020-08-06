import React from 'react';
import Page from '../Page';
import Axios from 'axios';
import { DispatchContext } from '../../context';
import { withRouter } from 'react-router-dom';

const API_CREATE_POST_URL = '/create-post'
const initialData = { title: '', body: '' };


function CreatePost({history}) {
  
  const myDispatch = React.useContext(DispatchContext);

  const [formData, setFormData] = React.useState(initialData);
  const [ token, setToken ] = React.useState(false);

  React.useEffect(() => {
    setToken(checkIfToken())
  },[]);

  function checkIfToken() {
    const token = null;
    if (localStorage.getItem('userData')) {
      return JSON.parse(localStorage.getItem('userData')).token;
    }
    return token;
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (token) {
      const tempData = {...formData, token}
      try {
        const response = await Axios.post(API_CREATE_POST_URL, tempData);
        addFlashMessage("Post Added");
        // setFormData(initialData);
        history.push(`/post/${response.data}`)
      } catch (err) {
        console.error(`error: ${err}`);
      }
    }
  }

  return (
    <Page className="container container--narrow py-md-5">
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="post-title" className="text-muted mb-1">
            <small>Title</small>
          </label>
          <input
            autoFocus
            name="title"
            id="post-title"
            className="form-control form-control-lg form-control-title"
            type="text"
            placeholder=""
            autoComplete="off"
            onChange={e =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            value={formData.title}
          />
        </div>

        <div className="form-group">
          <label htmlFor="post-body" className="text-muted mb-1 d-block">
            <small>Body Content</small>
          </label>
          <textarea
            name="body"
            id="post-body"
            className="body-content tall-textarea form-control"
            type="text"
            onChange={e =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            value={formData.body}
          ></textarea>
        </div>

        <button className="btn btn-primary">Save New Post</button>
      </form>
    </Page>
  );
}

export default withRouter(CreatePost);
