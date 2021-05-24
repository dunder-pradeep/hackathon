import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button'

class Navbar extends Component {
    state = { isAuth:false }
    render() { 
        return (
            <div className='navbar-container'>
                <div className='authgroup'>
                <Button color='primary'> <Link to='/courses'>Courses</Link></Button>
                <Button color = 'primary'><Link to='/planner'>Plan</Link></Button>
                </div>
               
                <Button color = 'primary'><Link to='/home'>Home</Link></Button>

                {this.state.isAuth &&
                    <div className='authgroup'>
                <Button color='primary'>Login</Button>
                    <Button color='primary'>Register</Button>
                    </div>}
                    
                
               
              

            </div>
         );
    }
}
 
export default Navbar;