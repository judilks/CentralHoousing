import React, { Component } from 'react'
import GroupUp from './Group/GroupUp';
import MapView from './MapView/MapView';
import PeckingOrder from './PeckingOrder/PeckingOrder';
 
class Homepage extends Component {


    render() {
        return (
            <div container="container">
                <div className="row">
                <div className= "col-sm-2">
                    <PeckingOrder/>
                </div>
                <div className= "col-lg-8 frame">
                    <MapView/>
                </div>
                <div className= "col-sm-2">
                   <GroupUp currentUser={this.props.currentUser}/>
                </div>
                </div>
            </div>
        )
    }
}
 
export default Homepage;