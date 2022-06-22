import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

	
axios
.get("http://localhost:8000/products/products/1/")
.then((results) => {
    console.log(results.data);
})
.catch((error) => {
    console.log('通信失敗');
    console.log(error.status);
});


function App() {
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
