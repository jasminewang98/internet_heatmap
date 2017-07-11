import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Map } from './Map.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Internet Heat Map</h2>
        </div>
        <p className="App-intro">
          <Map />
        </p>
      </div>
    );
  }
}

export default App;
