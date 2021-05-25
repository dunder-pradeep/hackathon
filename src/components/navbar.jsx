import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button'

import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
});


class Navbar extends Component {
    state = { isAuth:false }
    render() { 
        return (
          <div className='navbar-container'>
                            <Button color = 'primary'><Link to='/home'>Home</Link></Button>

                <div className='authgroup'>
                <Button color='primary'> <Link to='/courses'>Courses</Link></Button>
                <Button color = 'primary'><Link to='/planner'>Plan</Link></Button>
                </div>
               

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