import React, { Component } from 'react';
import Group from './Group';
import InviteToGroup from './InviteToGroup';
class GroupUp extends Component {

    constructor() {
        super();
        
    
    } 
    
    
    render() {
        
        return (
            <div container="container" className="center">
                <Group currentUser={this.props.currentUser} />
                <div className="btn-group" role="group">
                    <button className="btn btn-sm btn-secondary btn-block">Invite to Group</button>
                    <button id="leaveGroup" className="btn btn-sm btn-secondary btn-block">Leave Group</button>
                </div>
            </div>
        )
    }
}
export default GroupUp;