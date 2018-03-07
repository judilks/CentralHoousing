import React, { Component } from 'react';
import Group from './Group';
import InviteToGroup from './InviteToGroup';
class GroupUp extends Component {

    constructor() {
        super();
        this.state = {
            loadInviteComponent: false
        }
    
    } 
    
    checkState = () => {
        if (this.state.loadInviteComponent === true) {
          return <InviteToGroup/>
        }
        else if (this.state.loadInviteComponent === false){
          return <Group currentUser={this.props.currentUser} openSearch = {this.openInviteComponent}/>
        }
      }

      openInviteComponent = () => {
          this.setState({loadInviteComponent:true})
      }
    
    render() {
        
        return (
            <div container="container" className="center">
                {this.checkState()}
            </div>
        )
    }
}
export default GroupUp;