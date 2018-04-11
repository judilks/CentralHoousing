import React, { Component } from 'react';
import GroupTable from './GroupTable';

class Group extends Component {

    constructor() {
        super();
        this.state = {
            
          };
    
    }

    handleInviteSelected = () => {
        this.props.openSearch()
    }
    
    render() {
        
        return (
            <div container="container" className="center">
                <GroupTable currentUser = {this.props.currentUser} rooms={this.props.rooms}/>
                <div className="btn-group" role="group">
                    <button className="btn btn-primary" onClick={this.handleInviteSelected}>Invite to Group</button>
                    <button id="leaveGroup" className="btn btn-secondary">Leave Group</button>
                </div>
            </div>
            
        )
    }
}
export default Group;