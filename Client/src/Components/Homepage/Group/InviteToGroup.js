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
    
    render() {
        var ulStyle = {
            margin:"80px 0px 0px 0px"
        };
        return (
            <div className="container">
                <div>
                    <SearchBar handleSearchChange={this.handleSearchChange}/>
                </div>
                <div>
                    <ul style={ulStyle}>
                        {this.getFilteredUsersList()
                            .map(user => <li>{user.name}</li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }

}

let SearchBar = ({handleSearchChange}) => {
    var searchStyle = {
        margin:"20px 0px 0px 0px"
    };
    return (
        <div>
            <input type="text" className="form-control" style={searchStyle} placeholder="Search.." name="search" onChange={handleSearchChange}/>
        </div>
    );
}
export default InviteToGroup;