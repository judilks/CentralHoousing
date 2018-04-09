import React, { Component } from 'react';


class PeckingOrder extends Component {

    constructor() {
        super();
        this.state = {
            peckingOrder: []
        }
        
    
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
        this.getCurrentGroupsList()
        return (
            <div className="container">
                <div>
                    <table className="table table-bordered" style={{margin:"20px 0px 0px 0px"}}>
                    {this.state.peckingOrder
                            .map(group => <tr><td>{group}</td></tr>)
                        }
                    </table>
                </div>
            </div>
        )
    }

    

}

export default PeckingOrder;