import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import history from './History'

import './App.css';

ReactDOM.render(
  <Router history={history}>
    <App/>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
