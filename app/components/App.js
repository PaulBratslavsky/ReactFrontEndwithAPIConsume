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

Axios.defaults.baseURL = 'http://localhost:8080';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem('userData')) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Switch>
        <Route path="/" exact component={isLoggedIn ? WelcomePage : HomePage} />
        <Route path="/about" component={About} />
        <Route path="/terms" component={Terms} />
        <Route path="/createpost" component={CreatePost} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
