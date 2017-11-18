import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import App from './app'
import {store} from '../reducer/store.js'
import {Provider} from 'react-redux'


ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('content')
);
