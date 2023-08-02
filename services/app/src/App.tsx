import React from 'react';
import logo from './logo.svg';
import './App.css';

import Facade from './openbis/api';



function App() {
  const ob = new Facade("https://localhost:8445/resources/api/v3/config.js");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
