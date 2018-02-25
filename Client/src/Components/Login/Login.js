import React, { Component } from 'react';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            loginInformation: {
                username: "",
                password: ""
            }
        }
    }

    handleLogin = () => {
        this.props.submitLogin(this.state.loginInformation);
    }

    handleRegister = () => {
        this.setState({ needToRegister: true },
            function () {
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
            <div class="container">
                <form class="form-signin" onSubmit={this.handleLogin}>
                    <img class="mb-4" src="" alt="" width="72" height="72"/>
                    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>

                    <label for="inputUsername" class="sr-only">Username</label>
                    <input type="text" id="inputUsername" class="form-control" placeholder="Username"value={this.state.loginInformation.username} onChange={this.handleUsernameChange} required autofocus/>
                    
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" value={this.state.loginInformation.password} onChange={this.handlePasswordChange} required/>
                    
                    <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"/> Remember me
                        </label>
                    </div>

                    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign In</button>
                    <button class="btn btn-sm btn-secondary btn-block" onClick={this.handleRegister}>Register</button>
                    <p class="mt-5 mb-3 text-muted">&copy; 2018</p>
                </form>
            </div>
                            );
                        }
                    }
                    
export default Login;