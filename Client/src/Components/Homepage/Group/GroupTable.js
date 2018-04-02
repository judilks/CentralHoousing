import React, { Component } from 'react';

class GroupTable extends Component {

    constructor(props) {
        super();
        this.state = {
            username : props.currentUser.loginInformation.username,
            currentGroup: {
                GroupLeader: props.currentUser.firstName + ' ' + props.currentUser.lastName,
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
                        <tr>
                            <td>{this.state.currentGroup.user2}</td>
                        </tr>
                        <tr>
                            <td>{this.state.currentGroup.user3}</td>
                        </tr>
                        <tr>
                            <td>{this.state.currentGroup.user4}</td>
                        </tr>
                        <tr>
                            <td>{this.state.currentGroup.user5}</td>
                        </tr>
                        <tr>
                            <td>{this.state.currentGroup.user6}</td>
                        </tr>
                        <tr>
                            <td>{this.state.currentGroup.user7}</td>
                        </tr>
                        <tr>
                            <td>{this.state.currentGroup.user8}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        )
    }
}
export default GroupTable;