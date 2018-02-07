import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Please fill out the registration form.
        </p>
        <form>
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
			    <input type="submit" value="Register"/>
			    <button>Back</button>
            </div>
		</form>
      </div>
    );
  }
}

export default Register;
