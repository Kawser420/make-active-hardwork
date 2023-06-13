import React from 'react';
import './Detail.css'

const Detail = ({detail}) => {
    const { name, images, details, ages, time } = detail;

    
    return (
        <div className='detail'>
            <img src={images} alt="" />
            <div className='detail-info'>
                <h3>{name}</h3>
                <p>{details}</p>
                <h3>Age For: {ages}</h3>
                <h4>Time Required:{time}s</h4>
            </div>
            <button className='btn-cart'>Add To Target</button>
        </div>
    );
};

export default Detail;