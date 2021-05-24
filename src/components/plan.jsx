import React, { Component } from 'react';

import GraphWrap from './graph';
import Navbar from './navbar';
class Plan extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
            <Navbar></Navbar>
                <GraphWrap />
                </React.Fragment>
         );
    }
}
 
export default Plan;