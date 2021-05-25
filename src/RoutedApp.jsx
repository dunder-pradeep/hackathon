import React, { Component } from 'react';
import ReactDOM from "react-dom";

import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Navbar from './components/navbar';
import App from './App';

class RoutedApp extends Component {
    state = {
    }

    render() { 
        return (
            <BrowserRouter>
                <Route path='/'  component={Navbar}/>
                <Route path='/' component={App}/>
            </BrowserRouter>
         );
    }
}
 
export default RoutedApp;