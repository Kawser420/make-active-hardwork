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
                <p><strong>Age For:</strong> {ages}</p>
                <p><strong>Time Required:</strong> {time}s</p>
            </div>
        </div>
    );
};

export default Detail;