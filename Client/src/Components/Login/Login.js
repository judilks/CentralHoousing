import React, { Component } from 'react';

class Login extends Component {
  
    constructor() {
        super();
        this.state = {
            loginInformation: {
                username:"",
                password:""
            }
        }
    }

    handleLogin = () => {
        this.props.submitLogin(this.state.loginInformation);
    }

    handleRegister = () => {
        this.setState({needToRegister:true},
        function() {
            this.props.registerSelected();
        })
    }

    handleUsernameChange = (e) => {
       this.setState({
            loginInformation: {
                username: e.target.value,
                password: this.state.loginInformation.password
            }
        })
    }

    handlePasswordChange = (e) => {
        this.setState({
            loginInformation: {
                username: this.state.loginInformation.username,
                password: e.target.value
            }
        })
    }

    render() {
        return (
            <div className="App">
                <p className="App-intro">
                Please sign-up or log-in down below.
                </p>
                <div>
			        <label>Username: </label>
			        <input type="text" placeholder="Enter username" value={this.state.loginInformation.username} onChange={this.handleUsernameChange} />
                </div>
                <div>
			        <label>Password: </label>
			        <input type="password" placeholder="Password" value={this.state.loginInformation.password} onChange={this.handlePasswordChange}/>
                </div>
                <div>
			        <button onClick={this.handleLogin}>Login</button>
			        <button onClick={this.handleRegister}> Register</button>
                </div>
            </div>
        );
    }
}

export default Login;