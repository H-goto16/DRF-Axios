import React from 'react';
import './App.css';
import axios from 'axios';

axios.get("http://localhost:8000/products/products/1/")
  .then(response) => {
  console.log(response.data)
}

const data: string = axios.get("http;//localhost:8000/products/products/1/");

function App() {
  return (
    <div className="App">
         <h1>{data}</h1>     
    </div>
  );
}

export default App;
