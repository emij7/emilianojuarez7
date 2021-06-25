import React from 'react';
import logo from '../images/MiLogo.png'
import NavbarMenu from './NavbarMenu';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__img-container'>
                <img src={logo} alt="Personal logo" />
            </div>
            <NavbarMenu/>
        </div>
    );
}

export default Navbar;