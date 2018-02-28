import React, { Component } from 'react';
import Chat from './Chat/Chat';
import GroupUp from './Group/GroupUp';
 
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
                    <Chat {...this.props}/>
                </div>
                <div className= "col-sm-2">
                   <GroupUp currentUser={this.props.currentUser}/>
                </div>
                </div>
            </div>
        )
    }
}
 
export default Homepage;