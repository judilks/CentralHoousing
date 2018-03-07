import React, {Component} from 'react';
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
      'password': '626yjjiz!'
    }
  ]

}

class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      currentUser: ""
    }
  }
  
  reLogin = () => {

  } 

  checkState = () => {
    if (this.state.needToRegister === true) {
      return <Register submitRegistration = {this.handleRegistration} returnToLogin = {this.reLogin}/>
    }
    else if (this.state.loggedIn === false){
      return <Login submitLogin = {this.handleSubmitLogin.bind(this)} registerSelected={this.handleRegisterSelected}/>
    }
    else if (this.state.loggedIn === true) {
      console.log(this.state)
      return <HomepageContainer currentUser = {this.state.currentUser}/>
    }
  }

  // handleSubmitLogin = (loginInformation) => {
  //   console.log(loginInformation);
  //   for(var i in users.users){
  //     if(users.users[i].username === loginInformation.username 
  //       && users.users[i].password === loginInformation.password){
  //         var name = this.getUsersRealName(loginInformation);
  //         this.setState({loggedIn:true, currentUser: {username:loginInformation.username, name:name}})
  //     }
  //   }
  // }

  handleSubmitLogin = (loginInformation) => {
    var userInfo = this.getUser(loginInformation);
    //var name = this.getUsersRealName(loginInformation);
    
  }    

  getUser(loginInformation) {
    return fetch('http://localhost:3001/api/getUser', {
      body: JSON.stringify(loginInformation),
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *omit
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST', // *GET, PUT, DELETE, etc.
      mode: 'no cors', // no-cors, *same-origin
    })
    .then( (res) => {
      var userInfo = res.json();
      this.setState({loggedIn:true, currentUser:userInfo})
    })
    
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
