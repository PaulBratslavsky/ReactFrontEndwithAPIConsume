import React from 'react';
import { Link } from 'react-router-dom';
import { MainContext } from '../../context';


function HeaderUser() {

  const myContext = React.useContext(MainContext);
  const { setIsLoggedIn } = myContext.methods;
  const [ avatar, setAvatar ] = React.useState(false);

  React.useEffect(() => {
    setAvatar(checkIfAvatar())
  },[]);



  function checkIfAvatar() {
    const avatar = null;
    if (localStorage.getItem('userData')) {
      return JSON.parse(localStorage.getItem('userData')).avatar;
    }
    return avatar;
  }

  const handleLogOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('userData');
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
        { checkIfAvatar() && <img
          className="small-header-avatar"
          src={checkIfAvatar()}
        />}
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
