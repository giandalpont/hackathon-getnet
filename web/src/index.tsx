import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { BrowserRouter as Router } from 'react-router-dom'

import GlobalStyle from './styles/global'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <GlobalStyle />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
