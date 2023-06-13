import React from 'react';
import logo from '../../logo/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className='header-info'>
            <div className='header'>
            <img src={logo} alt="" />
            <h2>Make-Ultra-Club</h2>
        </div>
        <h3>Select Today’s Exercise</h3>
        </div>
    );
};

export default Header;