import React, { Component } from 'react';

class GroupTable extends Component {

    constructor(props) {
        super();
        this.state = {
            currentGroup: [props.currentUser],
            rooms: props.rooms
          };
    
    } 

    getGroup = () => {
        fetch('http://localhost:3001/api/getGroup', {
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
            if(res.status != 500)
                return res.json()
        })
        .then(json => {
            if(json != undefined){
                let validUser = json.find((user) => {
                    return user.id === this.props.currentUser.id
                })
                if(validUser != undefined)
                    this.setState({currentGroup: json})
            }
            
        })
    }
      
    handleRoomSelection = (currentUser) => {
        var userInGroup = this.state.currentGroup.find((user) => {
            return user.id === currentUser.id
        })
        var roomSelection = document.getElementById("roomSelection")
        if(roomSelection!= null)
            userInGroup.roomNumber = roomSelection.value
    } 

    
    render() {
        this.getGroup()
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
                    {this.state.currentGroup
                            .map(user => <tr><td>{user.displayName}</td>
                            <td>
                                <select className="form-control" id="roomSelection" placeholder="Select a Room" onChange={this.handleRoomSelection(user)}>
                                    <option defaultValue="" placeholder="Room" selected disabled>Room</option>
                                    {this.props.rooms.
                                    map(room => <option value={room.displayName}>{room.displayName}</option>)}/
                                </select>
                            </td></tr>)
                        }
                    </tbody>
                </table>
            </div>
            
        )
    }
}
export default GroupTable;