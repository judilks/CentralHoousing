import React, { Component } from 'react';
import Homepage from './Homepage';
 
 class HomepageContainer extends Component {
   
   constructor(){
        super();
        this.state = {
        // TODO add state here and pass it to child components.
     }
    }
 
    render() {
         return (
            <Homepage currentUser={this.props.currentUser}/>
         )
    }
}
 
 export default HomepageContainer;