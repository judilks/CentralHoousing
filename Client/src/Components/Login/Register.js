import React, { Component } from 'react';

class Register extends Component {

  constructor() {
    super();
    this.state = {
        
    }
  }

  render() {
    return (
      <div className="col-sm-6 center offset-3" contatiner="container">
        <form class="form-group" onSubmit={this.handleRegister}>
        <h1 class="h3 mb-3 font-weight-normal">Please fill out the registration information</h1>
        <div class="form-group">
          <label for="inputFirstName" class="sr-only">First Name: </label>
          <input type="text" class="form-control" placeholder="Enter first name" required/>
        </div>  
        <div class="form-group">
			    <label for="inputLastName" class="sr-only">Last Name: </label>
			    <input type="text" class="form-control" placeholder="Enter last name"  required/>
        </div>
        <div class="form-group">
          <label for="inputEmail" class="sr-only">Email: </label>
			    <input type="text" class="form-control" placeholder="Enter email"  required/>
        </div>
        <div class="form-group">
          <label for="inputGender" class="sr-only">Gender: </label>
          <select ref="Gender" class="form-control" placeholder="Select a Gender" required>
            <option value="" disabled selected>Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div class="form-group">
          <label for="inputUsername" class="sr-only">Username: </label>
			    <input type="text" class="form-control" placeholder="Enter username" required/>
        </div>
        <div class="form-group">
			    <label for="inputPassword" class="sr-only">Password: </label>
			    <input type="password" class="form-control" placeholder="Password"  required/>
        </div>
        <div class="form-group">
          <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
			    <button class="btn btn-sm btn-secondary btn-block">Back</button>
        </div>
        </form>
      </div>
    );
  }

  handleRegister = () => {
    this.setState({working:true}, this.props.submitRegistration())

  }

  returnToLogin = () => {
    this.props.resetLogin();
  }
}

export default Register;
