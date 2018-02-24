import React, { Component } from 'react';

class Login extends Component {
  
    constructor() {
        super();
        this.state = {
            needToRegister: ""
        }
    }

    handleLogin = () => {
        this.setState({loginInformation: {
            username: this.refs.username.value,
            password: this.refs.password.value
        }},
        function() {
            this.props.submitLogin(this.state.loginInformation);
        })
    }

    handleRegister = () => {
        this.setState({needToRegister:true},
        function() {
            this.props.registerSelected();
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
			        <input type="text" ref="username" placeholder="Enter username"/>
                </div>
                <div>
			        <label>Password: </label>
			        <input type="password" ref="password" placeholder="Password"/>
                </div>
                <div>
			        <button onClick={this.handleLogin.bind(this)}>Login</button>
			        <button onClick={this.handleRegister.bind(this)}> Register</button>
                </div>
            </div>
        );
    }
}

export default Login;
