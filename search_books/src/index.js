import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { reducer } from "./state/reducer";
import thunk from "redux-thunk"

const store = createStore(reducer, applyMiddleware(thunk));
export default store;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

