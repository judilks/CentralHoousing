import React, {Component} from 'react';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import './App.css';
import HomepageContainer from './Components/Homepage/HomepageContainer';
import Header from './Header'

class App extends Component {
  constructor(){
    super();
    this.state = {
      // loggedIn: true,
      // currentUser: {"_id":"5a749892cfb9c6015c91052a","firstName":"Justin","lastName":"Dilks","email":"dilksj1@central.edu","gender":"M","id":"1079753","housingNumber":1,"loginInformation":{"username":"dilksj1","password":"626yjjiz!"}}
      loggedIn: false,
      currentUser: "",
    }
  }

  checkState = () => {
    if (this.state.needToRegister === true) {
      return <Register submitRegistration = {this.handleRegistration} returnToLogin = {this.handleReturnToLogin}/>
    }
    else if (this.state.loggedIn === false){
      return <Login submitLogin = {this.handleSubmitLogin} registerSelected={this.handleRegisterSelected}/>
    }
    else if (this.state.loggedIn === true) {
      return <HomepageContainer currentUser = {this.state.currentUser}/>
    }
  }


  handleSubmitLogin = (loginInformation) => {
    fetch('http://localhost:3001/api/logIn', {
      body: JSON.stringify(loginInformation),
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *omit
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST', // *GET, PUT, DELETE, etc.
      mode: 'no cors', // no-cors, *same-origin
    })
    .then(res => {
      try{
        if(res.status === 401){
          throw new Error("Invalid Login")
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

  handleRegistration = (registerInformation) => {
    fetch('http://localhost:3001/api/register', {
      body: JSON.stringify(registerInformation),
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *omit
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST', // *GET, PUT, DELETE, etc.
      mode: 'no cors', // no-cors, *same-origin
    })
    .then(res => {
      if(res.status === 400){
        alert("Registration Failed")
      }
      else if(res.status === 201) {
        this.setState({needToRegister:false})
        alert("Registration Complete")
      }
    })
  }

  handleReturnToLogin = () => {
    this.setState({needToRegister:false});
  }


  handleRegisterSelected = () => {
    this.setState({needToRegister:true});
  }

  handleLogOut = () => {
    fetch('http://localhost:3001/api/logOut', {
      body: JSON.stringify(this.state.currentUser),
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *omit
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST', // *GET, PUT, DELETE, etc.
      mode: 'no cors', // no-cors, *same-origin
    })
    .then(res => {
      try{
        if(res.status === 401){
          throw new Error("Invalid Logout")
        }
        return res;
      }
      catch(e){
        alert(e);
      }
    }).then(res => {
      if(res.status === 202)
        this.setState({loggedIn:false, currentUser: ""})
    })
  }

  

  render() {
    return (
      <div className="App">
      <Header loggedIn = {this.state.loggedIn} logOut = {this.handleLogOut}/>
        {this.checkState()}
      </div>
    );
  }

  

}

export default App;
