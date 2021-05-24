import React, { Component } from 'react';

import {BrowserRouter,Route,Switch} from 'react-router-dom'

import App from './searchApp';
import Plan from './components/plan';
import Navbar from './components/navbar';

class RoutedApp extends Component {
    state = {  }
    render() { 
        return (
            <BrowserRouter>
                <Route path = '/' component={Navbar}/>
                <Route path='/courses' component={App} />
                <Route path='/planner' component={Plan}/>
                
            </BrowserRouter>
         );
    }
}
 
export default RoutedApp;