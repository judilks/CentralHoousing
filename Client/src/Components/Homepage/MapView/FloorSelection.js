import React, { Component } from 'react';
class FloorSelection extends Component {

    constructor() {
        super();
        this.state = {
            mapViewInfo: {
                building: "",
                floor: ""
            }
        }
    } 

    handleBuildingChange = (e) => {
        var mapViewInfo = {building: e.target.value, floor: this.state.mapViewInfo.floor}
        this.setState({
            mapViewInfo: mapViewInfo,
        })
        this.props.handleSelectionChanges(mapViewInfo)
    }

    handleFloorChange = (e) => {
        var mapViewInfo = {building: this.state.mapViewInfo.building, floor: e.target.value}
        this.setState({
            mapViewInfo: mapViewInfo
        })
        this.props.handleSelectionChanges(mapViewInfo)
    }
    
    render() {  
        return (
            <div container="container" className="center">
                <div className="row">
                    <div className= "col-sm-5">
                    </div>
                    <div className= "col-lg-2 frame">
                        <select className="form-control" onChange={this.handleBuildingChange}>
                            <option defaultValue="" placeholder="Building" selected disabled>Building</option>
                            <option value="Gaass">Gaass</option>
                            <option value="Pietenpol">Pietenpol</option>
                            <option value="Scholte">Scholte</option>
                            <option value="Graham">Graham</option>
                        </select>
                    </div>
                    <div className= "col-lg-2 frame">
                        <select className="form-control" onChange={this.handleFloorChange}>
                            <option defaultValue="" placeholder="Floor" selected disabled>Floor</option>
                            <option value="1st">1st</option>
                            <option value="2nd">2nd</option>
                            <option value="3rd">3rd</option>
                            {/* <option value="4th">4th</option> */}
                        </select>
                    </div>
                    <div className= "col-sm-1">
                    </div>
                </div>
            </div>
        )
    }
}
export default FloorSelection;