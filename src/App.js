import React, { Component } from 'react';
import Login from './Components/Login';
import Register from './Components/Register';
import logo from './CentralLogo.png';
import Driver from './Model/Driver.js';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      needToRegister: false
    };
    this.driver = new Driver();
  }
  checkState(){
    if (this.state.loggedIn === false){
      return <Login submitLogin={this.handleSubmitLogin.bind(this)} registerSelected={this.handleRegisterSelected.bind(this)}/>
    }
    if (this.state.needToRegister === true) {
      return <Register/>
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Central College Housing Sign-Up</h1>
        </header>
        {this.checkState()}
      </div>
    );
  }

  handleSubmitLogin(loginInformation){
    console.log(loginInformation);
    this.driver.handleRequest(loginInformation, "Login");
    this.setState({loggedIn:true})
  }

  handleRegisterSelected(){
    console.log('register selected')
    this.setState({needToRegister:true});
  }
}

export default App;
