import React, { Component } from 'react'
import GroupUp from './Group/GroupUp';
import MapView from './MapView/MapView';
import PeckingOrder from './PeckingOrder/PeckingOrder';
 
class Homepage extends Component {

    constructor() {
        super();
        this.state = {
            rooms: []
        }
    
    } 


    getRooms = (mapDisplayInfo) => {
        fetch('http://localhost:3001/api/getRooms', {
            body: JSON.stringify(mapDisplayInfo),
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
        })
    }

    render() {
        return (
            <div container="container">
                <div className="row">
                    <div className= "col-sm-2">
                        <PeckingOrder/>
                    </div>
                    <div className= "col-lg-7 frame">
                        <MapView getRooms={this.getRooms}/>
                    </div>
                    <div className= "col-sm-3">
                        <GroupUp currentUser={this.props.currentUser} rooms={this.state.rooms}/>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Homepage;