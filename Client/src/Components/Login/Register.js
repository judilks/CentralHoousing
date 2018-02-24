import React, { Component } from 'react';

class Register extends Component {

  constructor() {
    super();
    this.state = {
        
    }
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Please fill out the registration form.
        </p>
        <div>
          <label>First Name: </label>
		      <input type="text" placeholder="Enter username" required/>
        </div>
        <div>
			    <label>Last Name: </label>
			    <input type="text" placeholder="Enter username"  required/>
        </div>
        <div>
          <label>Email: </label>
			    <input type="text" placeholder="Enter username"  required/>
        </div>
        <div>
          <label>Gender: </label>
          <select ref= "Gender"  required>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>Username: </label>
			    <input type="text" placeholder="Enter username" required/>
        </div>
        <div>
			    <label>Password: </label>
			    <input type="password" placeholder="Password"  required/>
        </div>
        <div>
          <button onClick={this.handleRegister.bind(this)}>Register</button>
			    <button>Back</button>
        </div>
      </div>
    );
  }

  handleRegister = () => {
    this.setState({working:true}, this.props.submitRegistration())

  }
}

export default Register;
