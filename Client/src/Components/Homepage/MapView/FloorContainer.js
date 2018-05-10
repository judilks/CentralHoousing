import React, { Component } from 'react';
import Room from './Room';
class FloorContainer extends Component {

    constructor(props) {
        super();
        this.state = {
            mapViewInfo: {
                building: props.mapViewInfo.building,
                floor: props.mapViewInfo.floor
            },
            rooms:props.rooms,
            recievedNewRooms:true
        }
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.mapViewInfo !== this.state.mapViewInfo) {
            this.setState({ mapViewInfo: nextProps.mapViewInfo, recievedNewRooms:false });
        }
        if (nextProps.rooms!== this.state.rooms) {
            this.setState({ rooms: nextProps.rooms, recievedNewRooms:true });
        }
    }

    verifyFloorForGaass = (floor) => {
        let gaass = {
            first: [[100, "-1_HaveTop",  101, -1, -1, -1, -1, -1, -1, -1, -1, -1], ["Stairs_NoRight", -1, 105, -1, -1, -1, -1, -1, -1, -1, -1, -1], [106, -1, 107, -1, -1, -1, -1, -1, -1, -1, -1, -1], [108, -1, 109, -1, -1, -1, -1, -1, -1, -1, -1, -1,], [110, -1, 111, -1, -1, -1, -1, -1, -1, -1, -1, -1], [112, -1, "Bath_NoBottom", -1, -1, -1, -1, -1, -1, "Apt_NoBottom", "-1_HaveTop", "Stairs_NoLeft"], [114, -1, "Room_NoTop", 121, 123, "TV_NoRight", "Room_NoLeft", "Lounge", "Office", "Apt_NoTop", -1, "Apt_NoBottom"], ["Stairs_NoRight_NoBottom", -1,  -1, -1, -1, -1, -1, -1, -1, -1, -1, "Apt_NoTop_NoBottom"], ["117_NoRight", "117_NoLeft", 118, 120, 122, 124, "Kitch", "Ent.", "Comp._NoRight", "Lab_NoLeft", "Apt_NoRight", "Apt_NoLeft_NoTop"]],
            second: [[200, "-1_HaveTop",  201, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], ["Stairs_NoRight", -1, 205, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [206, -1, 207, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [208, -1, 209, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [210, -1, 211, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [212, -1, "Bath_NoBottom", -1, -1, -1, -1, -1, -1, -1, "Bath_NoBottom", "-1_HaveTop", "Stairs_NoLeft"], [214, -1, "Room_NoTop", 221, 223, 225, 227, 229, 231, 233, "Room_NoTop", -1, 240], ["Stairs_NoRight_NoBottom", -1,  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, "-1_HaveRight"], ["217_NoRight", "217_NoLeft", 218, 220, 222, 224, 226, 228, 230, 232, 234, 236, 238]],
            third: [[300, "-1_HaveTop",  301, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], ["Stairs_NoRight", -1, 305, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [306, -1, 307, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [308, -1, 309, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [310, -1, 311, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [312, -1, "Bath_NoBottom", -1, -1, -1, -1, -1, -1, -1, "Bath_NoBottom", "-1_HaveTop", "Stairs_NoLeft"], [314, -1, "Room_NoTop", 321, 323, 325, 327, 329, 331, 333, "Room_NoTop", -1, 340], ["Stairs_NoRight_NoBottom", -1,  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, "-1_HaveRight"], ["317_NoRight", "317_NoLeft", 318, 320, 322, 324, 326, 328, 330, 332, 334, 336, 338]]
        }
        if(floor === "1st"){
            return gaass.first
        }
        else if(floor === "2nd"){
            return gaass.second
        }
        else if(floor === "3rd"){
            return gaass.third
        }
    }

    verifyFloorForPiet = (floor) => {
        let piet = {
            first: [["Stairs_NoBottom", 101, 103, 105, 107, "Bath_NoRight", "Bath_NoLeft", "Lounge_NoRight", "Lounge_NoLeft"], ["-1_HaveLeft", -1,  -1, -1, -1, -1, -1, -1, "-1_HaveRight"], ["100_NoRight", "100_NoLeft", 102, 104, 106, 108, "-1_HaveBottom", "-1_HaveBottom", "Stairs_NoTop"]],
            second: [["Stairs_NoBottom", 201, 203, 205, 207, 209, "Bath_NoRight", "Bath_NoLeft", 211, 213, 215, 217, 219, "Stairs_NoBottom"], ["-1_HaveLeft", -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, "-1_HaveRight"], ["200_NoRight", "200_NoLeft", 202, 204, 206, 208, "Stairs_NoRight", "Laund_NoTop_NoLeft", 210, 212, 214, 216, "220_NoRight", "220_NoLeft"],],
            third: [["Stairs_NoBottom", 301, 303, 305, 307, 309, "Bath_NoRight", "Bath_NoLeft", 311, 313, 315, 317, 319, "Stairs_NoBottom"], ["-1_HaveLeft", -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, "-1_HaveRight"], ["300_NoRight", "300_NoLeft", 302, 304, 306, 308, "Stairs_NoRight", "Laund_NoTop_NoLeft", 310, 312, 314, 316, "320_NoRight", "320_NoLeft"]]
        }
        if(floor === "1st"){
            return piet.first
        }
        else if(floor === "2nd"){
            return piet.second
        }
        else if(floor === "3rd"){
            return piet.third
        }
    }

    getFloorToDisplay = () => {
        if(this.state.mapViewInfo.building === "Gaass") {
            return this.verifyFloorForGaass(this.state.mapViewInfo.floor)
        }
        else if(this.state.mapViewInfo.building === "Pietenpol") {
            return this.verifyFloorForPiet(this.state.mapViewInfo.floor)
        }        
    }

    checkFloorForDisplay = (floor) => {
        if(floor !== undefined && this.state.recievedNewRooms === true){
            return <div id="FloorPlan">
                {floor.map(row => {
                    return <div className="FloorRow">
                    {row.map(roomNumber => {
                        return <Room roomNumber={roomNumber} rooms = {this.props.rooms}/>
                    })}
                    </div>        
                })}
            </div>
        }
        
    }
    
    render() {
        let floor =  this.getFloorToDisplay()
        return (
            <div container="container" className="Center">
                <div className="Floor">
                    {this.checkFloorForDisplay(floor)}
                </div>
            </div>
        )
    }
}
export default FloorContainer;