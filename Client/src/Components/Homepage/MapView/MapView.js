import React, { Component } from 'react';
import FloorContainer from './FloorContainer';
import FloorSelection from './FloorSelection';
class MapView extends Component {

    constructor(props) {
        super();
        this.state = {
            mapViewInfo: {
                building: "",
                floor: ""
            },
            rooms:[]
        }
    }
    componentDidMount() {
        this.intervalID = setInterval(() => this.getRooms(), 3000)
    }
    
    componentWillUnmount(){
        clearInterval(this.intervalID)
    }

    handleSelectionChanges = (mapViewInfo) => {
        this.setState({mapViewInfo:mapViewInfo})
    }

    checkForFloorData = () => {
        if(this.state.rooms.length !== 0)
            return <FloorContainer mapViewInfo = {this.state.mapViewInfo} rooms = {this.state.rooms}/>
    }

    getRooms = () => {
        if(this.state.mapViewInfo.building !== "" && this.state.mapViewInfo.floor !== "") {
            fetch('http://localhost:3001/api/getRooms', {
            body: JSON.stringify(this.state.mapViewInfo),
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *omit
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST', // *GET, PUT, DELETE, etc.
            mode: 'no cors', // no-cors, *same-origin
            })
            .then(res => {
                return res.json()
            })
            .then(json => {
                json.sort(function(a, b){return a.roomNumber - b.roomNumber});
                this.setState({rooms: json})
                this.props.updateRooms(json)
            })
        }
        
    }
    
    render() {  
        return (
            <div container="container" className="center">
                <FloorSelection handleSelectionChanges = {this.handleSelectionChanges}/>
                {this.checkForFloorData()}
            </div>
        )
    }
}
export default MapView;