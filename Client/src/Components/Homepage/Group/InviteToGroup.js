import React, { Component } from 'react';
import './Group.css'


class InviteToGroup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentSearch: "",
            users: []
        }
    }
    
    componentDidMount() {
        this.intervalID = setInterval(this.getUsers(), 10000)
    }
    
    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    getUsers = () => {
        fetch('http://localhost:3001/api/getUsers', {
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *omit
          headers: {
            'content-type': 'application/json'
          },
          method: 'GET', // *GET, PUT, DELETE, etc.
          mode: 'no cors', // no-cors, *same-origin
        })
        .then(res => {
          try{
            if(res.status === 401){
              throw new Error("ERR")
            }
            return res.json();
          }
          catch(e){
            alert(e);
          }
        }).then(json => {
            for(var i in json) {
                if(json[i].id === this.props.currentUser.id) {
                    json.splice(i, 1)
                }
            }
            this.setState({users:json})
            console.log(json)
        })
      }

    handleSearchChange = (e) => {
        this.setState({currentSearch:e.target.value})
    }

    getFilteredUsersList = () => {
        var filteredUsers = []
        if(this.state.currentSearch === ""){
            return filteredUsers;
        }
        filteredUsers = this.state.users.filter(user => user.firstName.includes(this.state.currentSearch))
        return filteredUsers;
    }

    handleCancel = () => {
        this.props.exitSearch()
    }

    handleSendInvite = (selectedUser) => {
        var users = {
            'selectedUser': selectedUser,
            'currentUser': this.props.currentUser
        }
        fetch('http://localhost:3001/api/sendInvite', {
            body: JSON.stringify(users),
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *omit
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST', // *GET, PUT, DELETE, etc.
            mode: 'no cors', // no-cors, *same-origin
        })
        .then(res => {
            alert('Invite Sent')
        })
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
                            .map(user => <tr><td>{user.displayName} <button id="inviteButton" style={{float:"right"}} className="btn btn-primary" onClick={() => this.handleSendInvite(user)}>Invite</button></td></tr>)
                        }
                    </table>
                </div>
            </div>
        )
    }

    

}

let SearchBar = ({handleSearchChange, handleCancel}) => {
    return (
        <div>
            <input type="text" className="form-control Search-bar" placeholder="Search.." name="search" onChange={handleSearchChange} style={{display:"inline-block"}}/>
            <button id="cancelButton" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
        </div>
    );
}







// users = [
    //     {
    //       name : 'Justin Dilks',
    //       username : 'dilksj1', 
    //       password: '626yjjiz!'
    //     },
    //     {
    //       name : 'Hunter Pollpeter',
    //       username : 'pollpeterh1', 
    //       password: '626yjjiz!'
    //     },
    //     {
    //       name : 'Scott Wilson',
    //       username : 'wilsons1', 
    //       password: '626yjjiz!'
    //     },
    //     {
    //       name : 'Sean Rennich',
    //       username : 'rennichs1', 
    //       password: '626yjjiz!'
    //     },
    //     {
    //       name : 'Jacob Miediema',
    //       username : 'miediemaj1', 
    //       password: '626yjjiz!'
    //     },
    //     {
    //       name : 'Ryan Kruse',
    //       username : 'kruser1', 
    //       password: '626yjjiz!'
    //     },
    //     {
    //       name : 'Steven Fyfe',
    //       username : 'fyfes1', 
    //       password: '626yjjiz!'
    //     }
    
    //   ]
export default InviteToGroup;