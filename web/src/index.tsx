import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { BrowserRouter as Router } from 'react-router-dom'

import GlobalStyle from './styles/global'
import MenuProvider from './context/menu';

ReactDOM.render(
  <React.StrictMode>
    <MenuProvider>
      <Router>
        <App />
        <GlobalStyle />
    </Router>
    </MenuProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
