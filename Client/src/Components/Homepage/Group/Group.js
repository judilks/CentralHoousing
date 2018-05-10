import React, { Component } from 'react';
import GroupTable from './GroupTable';

class Group extends Component {

    constructor(props) {
        super();
        this.state = {
            roomsSelected:false,
            updatedGroup:[],
            needToDisable:props.needToDisable
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.needToDisable !== this.props.needToDisable) {
            this.setState({ needToDisable: nextProps.needToDisable });
        }
    }

    handleInviteSelected = () => {
        this.props.openSearch()
    }

    handleLeaveGroup = () => {
        this.props.leaveGroup()
    }

    handleRoomsSelected = (newStatus, updatedGroup) => {
        if(this.state.roomsSelected !== newStatus)
            this.setState({roomsSelected:newStatus, updatedGroup:updatedGroup})
    }

    checkNeedToDisable = () => {
        if(!this.state.needToDisable) {
            return <div className="btn-group" role="group">
                    <button className="btn btn-secondary" style={{margin:"5px"}} onClick={this.handleInviteSelected}>Invite to Group</button>
                    <button id="leaveGroup" className="btn btn-secondary" style={{margin:"5px"}} onClick={this.handleLeaveGroup}>Leave Group</button>
                </div>
        }
        else{
            return <p>You have already registered.</p>
        }
        
    }

    displayConfirmBtn = () => {
        if (this.state.roomsSelected && !this.state.needToDisable)
            return <div className="btn-group" style={{display:"block", margin:"10px"}}> <button id="confirmSelection" className="btn btn-primary" onClick={this.handleConfirmation}>Confirm Selection</button> </div>
    }

    handleConfirmation = () => {
        let r = window.confirm("Are you sure you want to sign up for these rooms?");
        if(r === true) {
            fetch('http://localhost:3001/api/confirmRoomSelection', {
                body: JSON.stringify(this.state.updatedGroup),
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
                    alert("Failed to submit housing registration")
                }
                else{
                    alert("Housing registration complete")
                }
            })
        }
    }
    
    render() {
        return (
            <div container="container" className="center">
                <GroupTable currentUser = {this.props.currentUser} rooms={this.props.rooms} currentGroup={this.props.currentGroup} turnToRegister={this.props.turnToRegister} handleRoomsSelected={this.handleRoomsSelected}/>
                {this.checkNeedToDisable()}
                {this.displayConfirmBtn()}
            </div>
            
        )
    }
}
export default Group;