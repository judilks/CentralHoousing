import React, { Component } from 'react';
import CurrentGroup from './CurrentGroup';
import InviteToGroup from './InviteToGroup';
class GroupUp extends Component {

    constructor() {
        super();
    
    } 
    
    
    render() {
        
        return (
            <div container="container" className="center">
                <CurrentGroup/>
                <div className="btn-group" role="group">
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Invite to Group</button>
                    <button id="leaveGroup" className="btn btn-sm btn-secondary btn-block">Leave Group</button>
                </div>
            </div>
            
        )
    }
}
export default GroupUp;