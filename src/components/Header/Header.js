import React from 'react';
import logo from '../../logo/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className='header-info'>
            <div className='title-header'>
                <div className='header'>
                    <img src={logo} alt="" />
                    <h1>Make-Ultra-Club</h1>
                </div>
            </div>
            <div className='item-name-h3'>
                <h3>Select Today's Exercise</h3>
            </div>
        </div>
    );
};

export default Header;