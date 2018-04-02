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
      //loggedIn: true,
      //currentUser: {"_id":"5a749892cfb9c6015c91052a","firstName":"Justin","lastName":"Dilks","email":"dilksj1@central.edu","gender":"M","id":"1079753","housingNumber":1,"loginInformation":{"username":"dilksj1","password":"626yjjiz!"}}
      loggedIn: false,
      currentUser: "",
    }
  }
  
  reLogin = () => {

  } 

  checkState = () => {
    if (this.state.needToRegister === true) {
      return <Register submitRegistration = {this.handleRegistration} returnToLogin = {this.reLogin}/>
    }
    else if (this.state.loggedIn === false){
      return <Login submitLogin = {this.handleSubmitLogin} registerSelected={this.handleRegisterSelected}/>
    }
    else if (this.state.loggedIn === true) {
      console.log(this.state)
      return <HomepageContainer currentUser = {this.state.currentUser}/>
    }
  }


  handleSubmitLogin = (loginInformation) => {
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
      try{
        if(res.status == '401'){
          throw "Invalid Login"
        }
        return res.json();
      }
      catch(e){
        alert(e);
      }
    }).then(json => {
      if(json !== undefined)
        this.setState({loggedIn:true, currentUser:json})
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
