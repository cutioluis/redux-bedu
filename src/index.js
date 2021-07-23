import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux/store';
import { Provider } from 'react-redux'

const store = createStore(
  {}, /* Todos los reducers */
  {} /* Estado inicial */
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
