import React from 'react';
import './ButtonSectionNew.scss';
import { useState } from 'react';
import { FiMinus, FiPlus } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { images } from '../../constants';
import { RiFacebookBoxLine, RiInstagramLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";

const ButtonSectionnew = () => {

    const [count, setCount] = useState(0)

    return (
        <>

            <div className='button_section-container'>

                <div className='btn-section-1'>
                    <div className='number-container'>
                        <span className='minus-btn-icon' onClick={() => setCount((count) => count - 1)}><FiMinus /></span>
                        <span>{count}</span>
                        <span className='plus-btn-icon' onClick={() => setCount((count) => count + 1)}><FiPlus /></span>
                    </div>
                    <div>
                        <button className='addtocart-btn'>Add To Cart</button>
                    </div>
                </div>

                <div style={{ marginTop: '0.5rem', textAlign: 'center' }}>
                    <button className='buy-btn'>Buy Now</button>
                </div>

                <div style={{ alignItems: 'center', marginTop: '1rem', fontWeight: '500' }}>
                    <span>Share:</span> &nbsp;
                    <a href="www.facebook.com"><RiFacebookBoxLine className='F-social-icon' />
                    </a>
                    <a href="www.linkedin.com"><CiLinkedin className='F-social-icon' />
                    </a>
                    <a href="www.instgram.com"><RiInstagramLine className='F-social-icon' />
                    </a>
                </div>


                <div className='visacard-btn' >
                    <div>
                        <span>We Accept</span>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <img src={images.image5} alt="image1" />
                        <img src={images.image2} alt="image2" />
                        <img src={images.image3} alt="image3" />
                        <img src={images.image4} alt="image4" />
                        <img src={images.image1} alt="image5" />
                    </div>
                </div>


                <div className='returns-btn'>
                    <span>30-days Free Returns</span>
                    <span>Read More <IoIosArrowForward /></span>
                </div>
            </div>

        </>
    )
}

export default ButtonSectionnew;