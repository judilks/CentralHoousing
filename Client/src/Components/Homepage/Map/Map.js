import React, { Component } from 'react';
class Map extends Component {

    constructor() {
        super();
        this.state = {
            Building: "",
            Floor: ""
        }
    
    } 
    
    checkState = () => {
      }
    
    render() {
        
        return (
            <div container="container" className="center">
                <div className="row">
                    <div className= "col-sm-4">
                    </div>
                    <div className= "col-lg-2 frame">
                    <select className="form-control">
                        <option value="1st">1st</option>
                        <option value="2nd ">2nd</option>
                        <option value="3rd">3rd</option>
                        <option value="4th">4th</option>
                    </select>
                    </div>
                    <div className= "col-lg-2 frame">
                    <select className="form-control">
                        <option value="Gaass">Gaass</option>
                        <option value="Pietenpol">Pietenpol</option>
                        <option value="Scholte">Scholte</option>
                        <option value="Graham">Graham</option>
                    </select>
                    </div>
                    <div className= "col-sm-4">
                    </div>
                </div>
            </div>
        )
    }
}
export default Map;