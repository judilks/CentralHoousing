import React, { Component } from 'react';
import './Group.css'


class InviteToGroup extends Component {

    constructor() {
        super();
        this.state = {
            currentSearch: "",
        }
    
    }

    users = [
        {
          name : 'Justin Dilks',
          username : 'dilksj1', 
          password: '626yjjiz!'
        },
        {
          name : 'Hunter Pollpeter',
          username : 'pollpeterh1', 
          password: '626yjjiz!'
        },
        {
          name : 'Scott Wilson',
          username : 'wilsons1', 
          password: '626yjjiz!'
        },
        {
          name : 'Sean Rennich',
          username : 'rennichs1', 
          password: '626yjjiz!'
        },
        {
          name : 'Jacob Miediema',
          username : 'miediemaj1', 
          password: '626yjjiz!'
        },
        {
          name : 'Ryan Kruse',
          username : 'kruser1', 
          password: '626yjjiz!'
        },
        {
          name : 'Steven Fyfe',
          username : 'fyfes1', 
          password: '626yjjiz!'
        }
    
      ]

    handleSearchChange = (e) => {
        this.setState({currentSearch:e.target.value})
    }

    getFilteredUsersList = () => {
        var filteredUsers = []
        if(this.state.currentSearch === ""){
            return filteredUsers;
        }
        filteredUsers = this.users.filter(user => user.name.includes(this.state.currentSearch))
        return filteredUsers;
    }

    handleCancel = () => {
        this.props.exitSearch()
    }
    
    render() {
        return (
            <div className="container">
                <div>
                    <SearchBar handleSearchChange={this.handleSearchChange} handleCancel={this.handleCancel}/>
                </div>
                <div>
                    <table className="table table-bordered" style={{margin:"20px 0px 0px 0px"}}>
                        {this.getFilteredUsersList()
                            .map(user => <tr><td>{user.name} <button id="inviteButton" style={{float:"right"}} className="btn btn-primary">Invite</button></td></tr>)
                        }
                    </table>
                </div>
            </div>
        )
    }

    

}

let SearchBar = ({handleSearchChange, handleCancel}) => {
    var searchStyle = {
        margin:"20px 0px 0px 0px",
        width:"70%",
    };
    return (
        <div>
            <input type="text" className="form-control Search-bar" placeholder="Search.." name="search" onChange={handleSearchChange} style={{display:"inline-block"}}/>
            <button id="cancelButton" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
        </div>
    );
}
export default InviteToGroup;