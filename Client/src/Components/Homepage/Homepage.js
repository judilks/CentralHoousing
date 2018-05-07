import React, { Component } from 'react'
import GroupUp from './Group/GroupUp';
import MapView from './MapView/MapView';
import PeckingOrder from './PeckingOrder/PeckingOrder';
 
class Homepage extends Component {

    constructor() {
        super();
        this.state = {
            rooms: [],
            currentGroup: "",
            peckingOrder: "",
            turnToRegister: false,
            needToDisable:false
        }
    
    }
    
    componentDidMount() {
        this.intervalID = setInterval(() => this.getGroupInfo(), 3000)
        this.getGroupInfo()
    }
    
    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    checkForGroup = () => {
        if(this.state.currentGroup != "") {
            return <GroupUp currentUser={this.props.currentUser} rooms={this.state.rooms} currentGroup={this.state.currentGroup} turnToRegister={this.state.turnToRegister} needToDisable={this.state.needToDisable}/>
        }
    }

    checkForAvgNumber = () => {
        if(this.state.currentGroup != "" && this.state.peckingOrder != "") {
            return <PeckingOrder averageNumber={this.state.currentGroup.averageNumber} peckingOrder={this.state.peckingOrder}/>
        }
    }

    checkTurnToRegister = () => {
        if(this.state.peckingOrder[0] === this.state.currentGroup.averageNumber && this.state.turnToRegister != true && this.state.currentGroup != "") {
            this.setState({turnToRegister: true})
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

    getGroupInfo = () => {
        fetch('http://localhost:3001/api/getGroupInfo', {
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
            json.peckingOrder.sort(function(a, b){return a - b}); 
            if(json != undefined){
                let validUser = undefined
                if(json.currentGroup != ""){
                    validUser = json.currentGroup.users.find((user) => {
                        return user.id === this.props.currentUser.id
                    })
                }
                if(validUser != undefined) {
                    this.setState({currentGroup: json.currentGroup, peckingOrder: json.peckingOrder, needToDisable:false})
                }
                else{
                    this.setState({currentGroup: this.state.currentGroup, peckingOrder: json.peckingOrder, turnToRegister:false, needToDisable:true})
                }    
            }
            
        })
    }

    getCurrentGroupsList = () => {
        return fetch('http://localhost:3001/api/getAverageNumberGroups', {
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *omit
            headers: {
                'content-type': 'application/json'
            },
            method: 'GET', // *GET, PUT, DELETE, etc.
            mode: 'no cors', // no-cors, *same-origin
        })
        .then( (res) => {
            try{
                if(res.status == '401'){
                throw "Invalid Login"
                }
                return res.json();
            }
            catch(e){
                alert(e);
        }
        })
        .then(json => {
            json.sort((a,b) => {return a - b})
            this.setState({peckingOrder: json})
        })
    }

    render() {
        this.checkTurnToRegister()
        return (
            <div container="container">
                <div className="row">
                    <div className= "col-sm-2">
                        {this.checkForAvgNumber()}
                    </div>
                    <div className= "col-lg-7 frame">
                        <MapView getRooms={this.getRooms}/>
                    </div>
                    <div className= "col-sm-3">
                        {this.checkForGroup()}
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Homepage;