import React from 'react';
import ReactDOM from 'react-dom';
import './components/scss/main.scss';
import App from './App';
<<<<<<< HEAD
import store from './components/redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
=======

ReactDOM.render(
  <React.StrictMode>
    <App />
>>>>>>> origin/master
  </React.StrictMode>,
  document.getElementById('root')
);
