import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import About from './About';
import Terms from './Terms';
import Footer from './Footer';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={About} />
      <Route path="/terms" component={Terms} />
    </Switch>
    <Footer />
  </Router>
);

export default App;
