
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
//add syntax for the div card.  Change class to className
  <div className="container">
    <div className="card-header">
    Featured
    </div>
    <div className="card-body">
      <h5 className="card-title">Special title treatment</h5>
      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>

  );
}

export default App;
