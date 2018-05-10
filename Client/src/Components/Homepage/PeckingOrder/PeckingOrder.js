import React, { Component } from 'react';


class PeckingOrder extends Component {

    constructor(props) {
        super();
        this.state = {
            peckingOrder: props.peckingOrder,
            averageNumber: props.averageNumber
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.peckingOrder !== this.state.peckingOrder) {
            this.setState({ peckingOrder: nextProps.peckingOrder });
        }
        if (nextProps.averageNumber !== this.state.averageNumber) {
            this.setState({ averageNumber: nextProps.averageNumber });
        }
    }

    render() {
        let sortedOrder = this.state.peckingOrder
        sortedOrder.sort((a,b) => {return a - b})
        return (
            <div className="container">
                <div>
                    <table className="table table-bordered" style={{margin:"20px 0px 0px 0px"}}>
                    {sortedOrder.map(groupNumber => {
                                if(groupNumber === this.state.averageNumber) {
                                    return <tr key={groupNumber}><td style={{background:"green", color:"white"}}>{groupNumber}</td></tr>
                                }
                                else {
                                    return <tr key={groupNumber}><td>{groupNumber}</td></tr>
                                } 
                            })
                            
                        }
                    </table>
                </div>
            </div>
        )
    }

    

}

export default PeckingOrder;