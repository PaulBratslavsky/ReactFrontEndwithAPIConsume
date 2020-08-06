import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import WelcomePage from './WelcomePage';
import About from './About';
import Terms from './Terms';
import Footer from './Footer';
import CreatePost from './CreatePost';
import Axios from 'axios';
import SinglePost from './SinglePost';
import FlashMessage  from './FlashMessage';
import { DispatchContext } from '../context';
import { StateContext } from '../context';


Axios.defaults.baseURL = 'http://localhost:8080';
const App = () => {

  const myState = React.useContext(StateContext);
  const myDispatch = React.useContext(DispatchContext);

  console.log(myState, "FROM STATE");
  console.log(myDispatch, "FROM DISPATCH");

  React.useEffect(() => {
    if (localStorage.getItem('userData')) {
      // setIsLoggedIn(true);
    }
  }, []);//isLoggedIn

  return (
    <Router>
      <FlashMessage messages={[]}/>
      <Header isLoggedIn={true} />
      <Switch>
        <Route path="/" exact component={true ? WelcomePage : HomePage} />
        <Route path="/about" component={About} />
        <Route path="/terms" component={Terms} />
        <Route path="/createpost" component={CreatePost} />
        <Route path="/post/:id" component={SinglePost} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
