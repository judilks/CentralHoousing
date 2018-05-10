import React, { Component } from 'react';

class GroupTable extends Component {

    constructor(props) {
        super();
        this.state = {
            currentGroup: props.currentGroup,
            rooms: props.rooms,
            turnToRegister:props.turnToRegister,
            groupSelections:"",
            roomsSelected:false
        };
    
    } 

    componentWillReceiveProps(nextProps) {
        if (nextProps.rooms !== this.state.rooms) {
            this.setState({ rooms: nextProps.rooms });
        }
        if (nextProps.currentGroup !== this.state.currentGroup) {
            this.setState({ currentGroup: nextProps.currentGroup });
        }
        if (nextProps.turnToRegister !== this.state.turnToRegister) {
            this.setState({ turnToRegister: nextProps.turnToRegister });
        }
    }
      
    handleRoomSelection = (user) => {
        var newGroup = ""
        if(this.state.groupSelections.length !== 0){
            newGroup = this.state.groupSelections
        }
        else {
            newGroup = this.state.currentGroup
        }
        var currentUser = user
        var userInGroup = newGroup.users.find((user) => {
            return user.id === currentUser.id
        })
        var roomSelection = document.getElementById(user.displayName)
        if(roomSelection!= null)
            userInGroup.roomNumber = roomSelection.value
        var allRoomsSelected = this.checkRoomsSelected(newGroup)
        this.setState({groupSelections: newGroup, roomsSelected:allRoomsSelected})
    }

    checkRoomsSelected = (group) => {
        for(var i in group.users) {
            if(group.users[i].roomNumber === undefined) {
                return false
            }
        }
        return true
    }

    checkTurnToRegister = () => {
        this.setState({turnToRegister:this.props.turnToRegister})
    }
    
    render() {
        this.props.handleRoomsSelected(this.state.roomsSelected, this.state.groupSelections)
        var roomId = ""
        return (
            <div container="container" className="center">
                 <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th style={{width:"60%"}}>Room</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.currentGroup.users
                                .map(user => <tr key={user.id}><td>{roomId = user.displayName}</td>
                                <td>
                                    <select className="form-control" id={roomId} placeholder="Select a Room" onChange={() => {this.handleRoomSelection(user)}} disabled={!this.state.turnToRegister}>
                                        <option selected="selected" disabled>Select a room</option>
                                        {this.props.rooms.map(room => <option key={room.displayName} value={room.displayName}>{room.displayName}</option>)}
                                    </select>
                                </td></tr>, this)
                        }
                    </tbody>
                </table>
            </div> 
        )
    }
}
export default GroupTable;