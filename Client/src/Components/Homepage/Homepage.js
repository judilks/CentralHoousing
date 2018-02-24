import React, { Component } from 'react';
 
class Homepage extends Component {
   
    render() {
        return (
            <p>Hello, {this.props.username}!</p>
        )
    }
}
 
export default Homepage;