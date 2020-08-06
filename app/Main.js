import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import MainContextProvider from './context';

ReactDom.render(<MainContextProvider><App /></MainContextProvider>, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
