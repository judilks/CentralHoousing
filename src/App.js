import React, { Component } from 'react';
import logo from './CentralLogo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Central College Housing Sign-Up</h1>
        </header>
        <p className="App-intro">
          Please sign-up or log-in down below.
        </p>
      </div>
    );
  }
}

export default App;
