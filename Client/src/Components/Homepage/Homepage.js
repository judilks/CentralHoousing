import React, { Component } from 'react';
import Chat from './Chat/Chat'
 
class Homepage extends Component {
   
    render() {
        var textStyle = {background:'black'};
        return (
            <div container="container">
                <div className="row">
                <div className= "col-sm-2" style={textStyle}>
                    random text
                </div>
                <div className= "col-lg-8 frame">
                    <Chat/>
                </div>
                <div className= "col-sm-2">
                   Invite to group feature
                </div>
                </div>
            </div>
        )
    }
}
 
export default Homepage;