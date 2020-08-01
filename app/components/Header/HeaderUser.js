import React, { useEffect } from 'react';



function HeaderUser({ setIsLoggedIn }) {
  const [ avatar, setAvatar ] = React.useState(false);

  useEffect(() => {
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

  console.log(avatar, "FUCK YOU")
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
      <a className="btn btn-sm btn-success mr-2" href="/create-post">
        Create Post
      </a>
      <button onClick={handleLogOut} className="btn btn-sm btn-secondary">
        Sign Out
      </button>
    </div>
  );
}

export default HeaderUser;
