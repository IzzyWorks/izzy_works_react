import React from 'react';
import ReactDOM from 'react-dom';
import './components/scss/main.scss';
import App from './App';
import { GlobalDirectionState } from './components/context/PageDirectionContext';

ReactDOM.render(
  <React.StrictMode>
    <GlobalDirectionState.Provider value={'forward'}>
      <App />
    </GlobalDirectionState.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
