import React from 'react';
import {NavLink} from 'react-router-dom';
class Navbar extends React.Component {
    render() {
        return (
            <div className='navbar'>
                <NavLink to='/'>Home</NavLink>
            </div>
        )
    }
}

export default Navbar;