import React, { Component } from 'react';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import logo from './CentralLogo.png';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      username: "",
    };
  }
  checkState = () => {
    if (this.state.needToRegister === true) {
      return <Register submitRegistration = {this.handleRegistration}/>
    }
    else if (this.state.loggedIn === false){
      return <Login submitLogin = {this.handleSubmitLogin} registerSelected={this.handleRegisterSelected}/>
    }
    else if (this.state.loggedIn === true) {
      return <h1>logged in</h1>
    }
  }

  handleSubmitLogin = (loginInformation) => {
    console.log(loginInformation);
    var users = this.getUsers();
    console.log(users);
    //this.setState({loggedIn:true})
  }

  handleRegistration = () => {
    console.log('registration completed')
    this.setState({needToRegister:false});
  }

  handleRegisterSelected = () => {
    console.log('register selected')
    this.setState({needToRegister:true});
  }

  getUsers(){
    fetch('/api/users')
    .then(res => {
      return res.json;
    })
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

  

}

export default App;
