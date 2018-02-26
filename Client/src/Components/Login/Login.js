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
            <div className="container">
                <form className="form-signin" onSubmit={this.handleLogin}>
                    <img className="mb-4" src="" alt="" width="72" height="72"/>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

                    <label htmlFor="inputUsername" className="sr-only">Username</label>
                    <input type="text" id="inputUsername" className="form-control" placeholder="Username"value={this.state.loginInformation.username} onChange={this.handleUsernameChange} required autoFocus/>
                    
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" value={this.state.loginInformation.password} onChange={this.handlePasswordChange} required/>
                    
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"/> Remember me
                        </label>
                    </div>

                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign In</button>
                    <button className="btn btn-sm btn-secondary btn-block" onClick={this.handleRegister}>Register</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2018</p>
                </form>
            </div>
                            );
                        }
                    }
                    
export default Login;