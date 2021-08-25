import './App.css';
import React from "react";
import Header from './components/Header';
import Main from './components/Main';
import { Provider } from "react-redux";
import store from './index';

function App() {

  return (
    <div className="App">
      <Header />
      <Provider store = {store}>
        <Main/>
      </Provider>
    </div>
  );

};

export default App;