import React, { Component } from 'react';
import './App.css';
import WorldMap from './WorldMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <WorldMap />
        </p>
      </div>
    );
  }
}

export default App;
