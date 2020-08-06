import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import ContextProvider from './context';

ReactDom.render(<ContextProvider><App /></ContextProvider>, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
