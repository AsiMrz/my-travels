import React, { Component } from 'react';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Popular Journeys in Iran</h1>
          <div className="App">
          <Travel/>
          </div>
          </header>
      </div>
    );
  }
}

export default App;
