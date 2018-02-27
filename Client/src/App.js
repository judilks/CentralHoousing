import React, { Component } from 'react';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import logo from './Assets/CentralLogo.png';
import './App.css';
import HomepageContainer from './Components/Homepage/HomepageContainer';

var users = {
  'users': [
    {
      'name' : 'Justin Dilks',
      'username' : 'dilksj1', 
      'password': '626yjjiz'
    },
    {
      'name' : 'Hunter Pollpeter',
      'username' : 'pollpeterh1', 
      'password': '626yjjiz'
    }
  ]

}

class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      userInfo: {
        name: "",
        username: ""
      }  
    }
  }
  checkState = () => {
    if (this.state.needToRegister === true) {
      return <Register submitRegistration = {this.handleRegistration}/>
    }
    else if (this.state.loggedIn === false){
      return <Login submitLogin = {this.handleSubmitLogin} registerSelected={this.handleRegisterSelected}/>
    }
    else if (this.state.loggedIn === true) {
      return <HomepageContainer currentUser = {this.state.userInfo} userList = {this.users}/>
    }
  }

  handleSubmitLogin = (loginInformation) => {
    console.log(loginInformation);
    if(this.validateUser(loginInformation)){
      var name = this.getUsersRealName(loginInformation)
      this.setState({loggedIn:true, userInfo: {
        username:loginInformation.username, name:name
      }})
    }
    else{
      alert('Failed to login. Invalid username or password')
    }
  }

  validateUser(loginInformation) {
    for(var i in users.users){
      if(users.users[i].username === loginInformation.username 
        && users.users[i].password === loginInformation.password){
          return true;
      }
    }
    return false;
  }

  getUsersRealName(loginInformation) {
    for(var i in users.users){
      if(users.users[i].username === loginInformation.username 
        && users.users[i].password === loginInformation.password){
          return users.users[i].name;
      }
    }
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
    fetch('http://localhost:3001/api/', {
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *omit
      headers: {
        'content-type': 'application/json'
      },
      method: 'GET', // *GET, PUT, DELETE, etc.
      mode: 'no cors', // no-cors, *same-origin
    })
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
