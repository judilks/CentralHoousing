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
        <form className="form-group" onSubmit={this.handleRegister}>
        <h1 className="h3 mb-3 font-weight-normal">Please fill out the registration information</h1>
        <div className="form-group">
          <label for="inputFirstName" className="sr-only">First Name: </label>
          <input type="text" className="form-control" placeholder="Enter first name" required/>
        </div>  
        <div className="form-group">
			    <label for="inputLastName" className="sr-only">Last Name: </label>
			    <input type="text" className="form-control" placeholder="Enter last name"  required/>
        </div>
        <div className="form-group">
          <label for="inputEmail" className="sr-only">Email: </label>
			    <input type="text" className="form-control" placeholder="Enter email"  required/>
        </div>
        <div className="form-group">
          <label for="inputGender" className="sr-only">Gender: </label>
          <select ref="Gender" className="form-control" placeholder="Select a Gender" required>
            <option value="" disabled selected>Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label for="inputUsername" className="sr-only">Username: </label>
			    <input type="text" className="form-control" placeholder="Enter username" required/>
        </div>
        <div className="form-group">
			    <label for="inputPassword" className="sr-only">Password: </label>
			    <input type="password" className="form-control" placeholder="Password"  required/>
        </div>
        <div className="form-group">
          <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
			    <button className="btn btn-sm btn-secondary btn-block" type="submit" formnovalidate>Back</button>
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
