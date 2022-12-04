import logo from './logo.svg';
import './css/App.css';
import Board from './components/Board.js';
import React from 'react';
import ReactDOM from 'react-dom/client';

//const root = ReactDOM.createRoot(document.getElementById('root'));

function App({root}) {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </header>
      <Board root={root}/>
    </div>
  );
}

export default App;
