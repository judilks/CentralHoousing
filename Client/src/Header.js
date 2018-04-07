import React, { Component } from 'react';
import logo from './Assets/CentralLogo.png';
import './App.css';
 class Header extends Component {
   
   constructor(){
        super();
        this.state = {
        }
    }

    determineLogOutButton = () => {
        if (this.props.loggedIn){
            return <button className="btn btn-primary" onClick={this.handleLogOut}>Log Out</button>
        }
    }

    handleLogOut = () => {
        this.props.logOut()
    }
 
    render() {
         return (
            <div>
                <header className="App-header">
                    <div className="row">
                        <div className= "col-sm-2">
                            {this.determineLogOutButton()}
                        </div>
                        <div className= "col-lg-8 frame">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h1 className="App-title">Central College Housing Sign-Up</h1>
                        </div>
                        <div className= "col-sm-2">
                            
                        </div>
                    </div>

                    
                </header>
            </div>
         )
    }
}
 
 export default Header;