import React from 'react';
import './Updates.scss';
import { images } from '../../constants';


const Updates = () => {
    return (

        <>
            <div className='update-container'>
                <div className='Update-text'>
                    <h3>Stay Connected: Join Us on Instagram for Exclusive Updates and More!</h3>
                </div>
                <div className='update-img-cn'>
                    <div className='update-img'>
                        <img src={images.p1} alt="image" />
                        <img src={images.p2} alt="image" />
                        <img src={images.p3} alt="image" />
                        <img src={images.p4} alt="image" />
                    </div>
                    <div className='update-img'>
                        <img src={images.p5} alt="image" />
                        <img src={images.p6} alt="image" />
                        <img src={images.p7} alt="image" />
                        <img src={images.p8} alt="image" />
                    </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <button className='update-button'>Follow Metion</button>
                </div>

            </div>

        </>
    )
}

export default Updates;