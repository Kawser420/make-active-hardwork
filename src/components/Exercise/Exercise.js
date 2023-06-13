import React, { useEffect, useState } from 'react';
import './Exercise.css'
import Detail from '../Detail/Detail';
import Cart from '../Cart/Cart';

const Exercise = () => {
    const [details, setDetails] = useState([]);

    useEffect( () => {
        fetch('packge.json')
        .then(res => res.json())
        .then(data => setDetails(data));
    }, []);

    return (
        <div className='exercise-container'>
            <div className="cart-container">
                {
                    details.map(detail => <Detail
                    key={detail.id}
                    detail = {detail}
                    ></Detail>)
                }
            </div>
            <div className="cart2-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Exercise;