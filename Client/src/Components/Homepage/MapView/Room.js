import React, { Component } from 'react';
class Room extends Component {

    constructor(props) {
        super();
        this.state = {
            roomNumber:props.roomNumber,
            occupied:"",
            rooms:props.rooms,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.rooms !== this.state.rooms) {
            this.setState({ rooms: nextProps.rooms });
        }
        if(nextProps.roomNumber !== this.state.roomNumber ) {
            this.setState({roomNumber: nextProps.roomNumber})
        }
    }
    
    checkRoomContents = () => {
        let roomNumber = this.state.roomNumber.toString()
        let roomInfo = roomNumber.split("_")
        let classString= this.buildClassString(roomInfo)
        if(roomInfo[0] === "-1"){
            return <div className={classString}>Empty</div>      
        }
        else{
            if(this.state.rooms != undefined)
                var currentRoom = this.state.rooms.find((room) => {
                    return room.roomNumber === roomInfo[0]})
            //Check if room is number
            if(!isNaN(parseInt(roomInfo[0]))) {
                //Check if room is occupied
                if(currentRoom === undefined){
                    return <div className={classString + " RoomOccupied"}>{roomInfo[0]}</div>
                }
            }
            return <div className={classString}>{roomInfo[0]}</div>
             
        }
    }

    buildClassString = (roomInfo) => {
        let classString = ""
            for(var i in roomInfo){
                if(i === "0"){
                    if(roomInfo[i] === "-1")
                        classString += "Empty "
                    else
                        classString += "Room "
                }
                else
                    classString += roomInfo[i] + " "
            }
            return classString
    }
    
    render() {  
        return (
            <div style={{height:"45px", display:"inline-block"}}>
                {this.checkRoomContents()}
            </div>
        )
    }
}
export default Room;