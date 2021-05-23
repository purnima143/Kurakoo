import React, { Component } from 'react';
import './alert.css';

class alert extends Component {
    constructor(props) {
        super(props);
        this.state={hidden:false,};
    }
    timer=setInterval(()=>{
        this.setState({hidden:true});},4000);
    
    render() { 
        return ( <div>
            {this.state.hidden ? (
              ' '
            ) : (
              <div
                className='alert alert-dismissible fade show myalert'
                
              >
                <p>
                  <strong>Great Landing !</strong> Create a profile to get started.
                </p>
                
              </div>
            )}
          </div>
        
     );
    }
}
 
export default alert;
