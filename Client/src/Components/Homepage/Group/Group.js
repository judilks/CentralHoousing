import React, { Component } from 'react';

class Group extends Component {

    constructor(props) {
        super();
        this.state = {
            username : props.currentUser.username,
            currentGroup: {
                GroupLeader: props.currentUser.name,
                user2: "",
                user3: "",
                user4: "",
                user5: "",
                user6: "",
                user7: "",
                user8: ""

            }
          };
    
    } 

    createGroup = () => {
    }

    handleInviteSelected = () => {
        this.props.openSearch()
    }
    
    render() {
        
        return (
            <div container="container" className="center">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.currentGroup.GroupLeader}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="btn-group" role="group">
                    <button className="btn btn-primary" onClick={this.handleInviteSelected}>Invite to Group</button>
                    <button id="leaveGroup" className="btn btn-secondary">Leave Group</button>
                </div>
            </div>
            
        )
    }
}
export default Group;