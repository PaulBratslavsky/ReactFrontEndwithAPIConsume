import React from 'react';
import { Link } from 'react-router-dom';
import { DispatchContext } from '../../context';

function HeaderUser() {
  const myDispatch = React.useContext(DispatchContext);

  const [avatar, setAvatar] = React.useState(false);

  React.useEffect(() => {
    setAvatar(checkIfAvatar());
  }, []);

  function checkIfAvatar() {
    const avatar = null;
    if (localStorage.getItem('userData')) {
      return JSON.parse(localStorage.getItem('userData')).avatar;
    }
    return avatar;
  }

  const handleLogOut = () => {
    localStorage.removeItem('userData');
    myDispatch.logInDispatch({ type: 'logout' });
  };

  return (
    <div className="flex-row my-3 my-md-0">
      <a href="#" className="text-white mr-2 header-search-icon">
        <i className="fas fa-search"></i>
      </a>
      <span className="mr-2 header-chat-icon text-danger">
        <i className="fas fa-comment"></i>
        <span className="chat-count-badge text-white">3</span>
      </span>
      <a href="#" className="mr-2">
        {avatar && (
          <img className="small-header-avatar" src={checkIfAvatar()} />
        )}
      </a>
      <Link className="btn btn-sm btn-success mr-2" to="/createpost">
        Create Post
      </Link>
      <button onClick={handleLogOut} className="btn btn-sm btn-secondary">
        Sign Out
      </button>
    </div>
  );
}

export default HeaderUser;
