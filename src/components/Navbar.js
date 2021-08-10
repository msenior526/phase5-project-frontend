import React from 'react';
import {NavLink} from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'pink',
    textDecoration: 'none',
    color: 'white',
}

class Navbar extends React.Component {
    render() {
        return (
            <div className='navbar'>
                <NavLink 
                to='/'
                exact
                style={link}
                >Home</NavLink>

                <NavLink
                to='/signup'
                exact
                style={link}>Signup</NavLink>
            </div>
        )
    }
}

export default Navbar;