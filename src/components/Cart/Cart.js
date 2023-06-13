import React from 'react';
import logo from '../../logo/logo2.png'
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart-information'>
            <div>
                <div className="title-items">
                    <img src={logo} alt="" />
                    <div className='small-info'>
                        <small className='small-name'>Muhammad Kawser</small>
                        <small>New York, USA</small>
                    </div>
                </div>
                <div className="human">
                    <div className='human-bio'>
                        <h2>75<strong>kg</strong><small className='title-bio'>Weight</small></h2>
                        <h2>6.5<strong>ft</strong><small className='title-bio'>Height</small></h2>
                        <h2>25<strong>yry</strong><small className='title-bio'>Age</small></h2>
                    </div>
                </div>
                <div className="break">
                    <p>Add A Break</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;