import React from 'react';
import './SimilarItems.scss';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";
import { images } from '../../constants';


const SimilarItems = () => {
    return (

        <>
            <div className='SimilarItems-container'>

                <div className='si-container-1' >

                    <div className='si-text-cn'>
                        <h4>You may also like</h4>
                    </div>

                    <div className='si-next-icon'>
                        <div><IoIosArrowBack className='no-icon1' /></div>
                        <div>
                            <span ><RiNumber1 className='no-icon' /></span>
                            <span><RiNumber2 className='no-icon no-icon1' /></span>
                            <span ><RiNumber3 className='no-icon no-icon1' /></span>
                        </div>
                        <div><IoIosArrowForward /></div>
                    </div>
                </div>

                <div className='si-img-cn'>
                    <div className='si-img'>
                        <img src={images.p2} alt="image" />
                        <h4>$12</h4>
                        <span>Wooden Pumice Brush</span><br />
                        <div style={{ alignItems: 'center' }}>
                            <span style={{ fontSize: '14px' }}>⭐⭐⭐⭐⭐</span>  <span>521 (4.5/5)</span>
                        </div>
                    </div>
                    <div className='si-img'>
                        <img src={images.p3} alt="image" />
                        <h4>$12</h4>
                        <span>Herbal Body Soap</span><br />
                        <div style={{ alignItems: 'center' }}>
                            <span style={{ fontSize: '14px' }}>⭐⭐⭐⭐⭐</span>  <span>521 (4.5/5)</span>
                        </div>
                    </div>
                    <div className='si-img'>
                        <img src={images.p4} alt="image" />
                        <h4>$12</h4>
                        <span>Floral Body Soap</span><br />
                        <div style={{ alignItems: 'center' }}>
                            <span style={{ fontSize: '14px' }}>⭐⭐⭐⭐⭐</span>  <span>521 (4.5/5)</span>
                        </div>
                    </div>
                    <div className='si-img'>
                        <img src={images.p5} alt="image" />
                        <h4>$12</h4>
                        <span>Natural Face Wash</span><br />
                        <div style={{ alignItems: 'center' }}>
                            <span style={{ fontSize: '14px' }}>⭐⭐⭐⭐⭐</span>  <span>521 (4.5/5)</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SimilarItems;