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
            </div>
            
        )
    }
}
export default Group;