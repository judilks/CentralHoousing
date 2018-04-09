import React, { Component } from 'react';

class Register extends Component {

  constructor() {
    super();
    this.state = {
      registerInformation: {
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        username: "",
        password: "",
        id: ""
      }
    }
  }

  handleFirstNameChange = (e) => {
      this.setState({
        registerInformation: {
          firstName: e.target.value,
          lastName: this.state.registerInformation.lastName,
          email: this.state.registerInformation.email,
          gender: this.state.registerInformation.gender,
          username: this.state.registerInformation.username,
          password: this.state.registerInformation.password,
          id: this.state.registerInformation.id
        }
      })
  }
  handleLastNameChange = (e) => {
    this.setState({
      registerInformation: {
        firstName: this.state.registerInformation.firstName,
        lastName: e.target.value,
        email: this.state.registerInformation.email,
        gender: this.state.registerInformation.gender,
        username: this.state.registerInformation.username,
        password: this.state.registerInformation.password,
        id: this.state.registerInformation.id
      }
    })
  }
  handleEmailChange = (e) => {
    this.setState({
      registerInformation: {
        firstName: this.state.registerInformation.firstName,
        lastName: this.state.registerInformation.lastName,
        email: e.target.value,
        gender: this.state.registerInformation.gender,
        username: this.state.registerInformation.username,
        password: this.state.registerInformation.password,
        id: this.state.registerInformation.id
      }
    })
  }
  handleGenderChange = (e) => {
    this.setState({
      registerInformation: {
        firstName: this.state.registerInformation.firstName,
        lastName: this.state.registerInformation.lastName,
        email: this.state.registerInformation.email,
        gender: e.target.value,
        username: this.state.registerInformation.username,
        password: this.state.registerInformation.password,
        id: this.state.registerInformation.id
      }
    })
  }
  handleUsernameChange = (e) => {
    this.setState({
      registerInformation: {
        firstName: this.state.registerInformation.firstName,
        lastName: this.state.registerInformation.lastName,
        email: this.state.registerInformation.email,
        gender: this.state.registerInformation.gender,
        username: e.target.value,
        password: this.state.registerInformation.password,
        id: this.state.registerInformation.id
      }
    })
  }
  handlePasswordChange = (e) => {
    this.setState({
      registerInformation: {
        firstName: this.state.registerInformation.firstName,
        lastName: this.state.registerInformation.lastName,
        email: this.state.registerInformation.email,
        gender: this.state.registerInformation.gender,
        username: this.state.registerInformation.username,
        password: e.target.value,
        id: this.state.registerInformation.id
      }
    })
  }
  handleIDChange = (e) => {
    this.setState({
      registerInformation: {
        firstName: this.state.registerInformation.firstName,
        lastName: this.state.registerInformation.lastName,
        email: this.state.registerInformation.email,
        gender: this.state.registerInformation.gender,
        username: this.state.registerInformation.username,
        password: this.state.registerInformation.password,
        id: e.target.value
      }
    })
  }


  render() {
    return (
      <div className="col-sm-6 center offset-3" contatiner="container">
        <h1 className="h3 mb-3 font-weight-normal">Please fill out the registration information</h1>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Enter first name" value={this.state.registerInformation.firstName} onChange={this.handleFirstNameChange}/>
        </div>  
        <div className="form-group">
			    <input type="text" className="form-control" placeholder="Enter last name"  value={this.state.registerInformation.lastName} onChange={this.handleLastNameChange}/>
        </div>
        <div className="form-group">
			    <input type="text" className="form-control" placeholder="Enter email"  value={this.state.registerInformation.email} onChange={this.handleEmailChange}/>
        </div>
        <div className="form-group">
          <select ref="Gender" className="form-control" placeholder="Select a Gender" value={this.state.registerInformation.gender} onChange={this.handleGenderChange}>
            <option value="" disabled selected>Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
			    <input type="text" className="form-control" placeholder="Enter username" value={this.state.registerInformation.username} onChange={this.handleUsernameChange}/>
        </div>
        <div className="form-group">
			    <input type="password" className="form-control" placeholder="Password"  value={this.state.registerInformation.password} onChange={this.handlePasswordChange}/>
        </div>
        <div className="form-group">
			    <input type="text" className="form-control" placeholder="I.D." value={this.state.registerInformation.id} onChange={this.handleIDChange}/>
        </div>
        <div className="form-group">
          <button className="btn btn-lg btn-primary btn-block" onClick={this.handleRegister}>Register</button>
			    <button className="btn btn-sm btn-secondary btn-block" type="submit" onClick={this.returnToLogin}>Back</button>
        </div>
      </div>
    );
  }

  handleRegister = () => {
    this.props.submitRegistration(this.state.registerInformation)

  }

  returnToLogin = () => {
    this.props.returnToLogin();
  }
}

export default Register;
