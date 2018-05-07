import React, { Component } from 'react';
import Group from './Group';
import InviteToGroup from './InviteToGroup';
class GroupUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loadInviteComponent: false,
            haveInvites: false,
            acceptingInvite: {
                user: "",
                needToAccept:false
            } 
        }
    
    }
    
    componentDidMount() {
        this.intervalID = setInterval(() => this.getInvites(), 5000)
    }
    
    componentWillUnmount() {
        clearInterval(this.intervalID)
    }
    
    checkState = () => {
        if (this.state.loadInviteComponent === true) {
          return <InviteToGroup exitSearch={this.exitInviteComponent} currentUser={this.props.currentUser}/>
        }
        else if (this.state.loadInviteComponent === false){
          return <Group currentUser={this.props.currentUser} openSearch={this.openInviteComponent} rooms={this.props.rooms} leaveGroup={this.handleLeaveGroup} currentGroup={this.props.currentGroup} turnToRegister={this.props.turnToRegister} needToDisable={this.props.needToDisable}/>
        }
      }

      openInviteComponent = () => {
          this.setState({loadInviteComponent:true})
      }

      exitInviteComponent = () => {
          this.setState({loadInviteComponent:false})
      }

      getInvites = () => {
        return fetch('http://localhost:3001/api/getInvites', {
            body: JSON.stringify(this.props.currentUser),
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *omit
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST', // *GET, PUT, DELETE, etc.
            mode: 'no cors', // no-cors, *same-origin
        })
        .then(res => {
                if(res.status === 203){
                    this.setState({haveInvites:false})
                }
                else{
                    return res.json()   
                }
        })
        .then(json => {
            if(json !=undefined ){
                let r = window.confirm(json.displayName + " has invited you to join their group");
                if(r === true) {
                    this.setState({acceptingInvite:{needToAccept:true, user:json}, haveInvites:true}) 
                }
            }
            
        })
    }

    acceptInvite = (selectedUser) => {
        var users = {
            'selectedUser': selectedUser,
            'currentUser': this.props.currentUser
        }
        return fetch('http://localhost:3001/api/acceptInvite', {
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
                if(res.status === 203){
                    alert("Failed to join group")
                }
                this.setState({acceptingInvite:{needToAccept:false, user:""}, haveInvites:false}) 
        })
    }

    checkAcceptInvite = () => {
        if(this.state.acceptingInvite.needToAccept) {
            this.acceptInvite(this.state.acceptingInvite.user)
        }
    }

    handleLeaveGroup = () => {
        return fetch('http://localhost:3001/api/leaveGroup', {
            body: JSON.stringify(this.props.currentUser),
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *omit
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST', // *GET, PUT, DELETE, etc.
            mode: 'no cors', // no-cors, *same-origin
        })
        .then(res => {
                if(res.status === 203){
                    alert("Failed to leave group")
                }
                else{
                    alert("Successfully left group")
                }
        })
    }
    
    render() {
        this.getInvites()
        this.checkAcceptInvite()
        return (
            <div container="container" className="center">
                {this.checkState()}
            </div>
        )
    }
}
export default GroupUp;