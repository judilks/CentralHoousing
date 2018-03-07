import React, { Component } from 'react';
import './Group.css'
var users = {
    'users': [
      {
        'name' : 'Justin Dilks',
        'username' : 'dilksj1', 
        'password': '626yjjiz!'
      },
      {
        'name' : 'Hunter Pollpeter',
        'username' : 'pollpeterh1', 
        'password': '626yjjiz!'
      },
      {
        'name' : 'Scott Wilson',
        'username' : 'wilsons1', 
        'password': '626yjjiz!'
      },
      {
        'name' : 'Sean Rennich',
        'username' : 'rennichs1', 
        'password': '626yjjiz!'
      },
      {
        'name' : 'Jacob Miediema',
        'username' : 'miediemaj1', 
        'password': '626yjjiz!'
      },
      {
        'name' : 'Ryan Kruse',
        'username' : 'kruser1', 
        'password': '626yjjiz!'
      },
      {
        'name' : 'Steven Fyfe',
        'username' : 'fyfes1', 
        'password': '626yjjiz!'
      }
    ]
  
}

class InviteToGroup extends Component {

    constructor() {
        super();
        this.state = {
            currentSearch: "",
        }
    
    }

    // filterUserList() {
    //     var filteredUsers = []
    //     for(var i in users) {
    //         if(users[i].name.includes(this.state.currentSearch)) {
    //             filteredUsers.push(users[i].name)
    //         }
    //     }
    //     return filteredUsers;
    // }

    handleSearchChange = (e) => {
        this.setState({currentSearch:e.target.value})
    }

    SearchBar = (props) => {
        var searchStyle = {
            margin:"20px 0px 0px 0px"
        };
        return (
            <div>
                <input type="text" className="form-control" style={searchStyle} placeholder="Search.." name="search" onChange={this.handleSearchChange}/>
            </div>
        );
    }

    //getFilteredUsersList = () => {
    //     var filteredUsers = this.filterUserList()
    //     var list = ""
    //     for(var i in filteredUsers) {
    //         list += <li>{filteredUsers[i]}</li>
    //     }
    //     return list;
    // }
    
    render() {
        var ulStyle = {
            margin:"80px 0px 0px 0px"
        };
        return (
            <div className="container">
                <div>
                    <this.SearchBar/>
                </div>
                <div>
                    <ul style={ulStyle}>{this.getFilteredUsersList()}</ul>
                </div>
            </div>
        )
    }

}
export default InviteToGroup;