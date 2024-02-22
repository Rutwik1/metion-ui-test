import React from 'react';
import './TrustedSection.scss';
import logo from '../../assets/metion.png';
import { IoCubeOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BsArrowRepeat, BsEmojiSmile } from "react-icons/bs";
import { RiFacebookBoxLine, RiInstagramLine } from "react-icons/ri";
import { CiLinkedin, CiYoutube } from "react-icons/ci";
import { images } from '../../constants';



const TrustedSection = () => {
    return (
        <>
            <div className='Trusted-container'>

                <div className='trusted-cn-1'>
                    <div>
                        <span><IoCubeOutline className='happy-icons' /></span>
                        <h5>Shipping</h5>
                        <span>Enjoy Free Shipping on Select <br /> Orders: Your Ticket to Savings!</span>
                    </div>
                    <div>
                        <span><LiaShippingFastSolid className='happy-icons' /></span>
                        <h5>Delivery</h5>
                        <span>Speedy Delivery: Get Your <br /> Goods in Record Time!</span>
                    </div>
                    <div>
                        <span><BsArrowRepeat className='happy-icons' /></span>
                        <h5>Returns</h5>
                        <span>Test Drive with Confidence: Your <br /> Time to Try, Risk-Free!</span>
                    </div>
                    <div>
                        <span><BsEmojiSmile className='happy-icons' /></span>
                        <h5>Happy</h5>
                        <span>Thriving on Satisfaction: Join Our <br /> Community of Happy Customers!</span>
                    </div>
                </div>

                <div className='trusted-cn-2'>
                    <div className='trusted-cn-2-logo-cn'>
                        <img src={logo} alt="metion" className='trusted-cn-2-logo' />
                    </div>
                    <div className='trusted-cn-2-text'>
                        <h4>Elevate Your Beauty Routine with Mention: <br /> Discover Luxueious Skincare & Makeup!</h4>
                        <span>Indulge in the world of beauty with Mention, where luxury meets effectiveness. <br /> Explore our exquisite rangeof skincare and makeup products crafted to enhance your <br /> natural beauty. Elevate your beauty routine with Mention today!</span>
                    </div>
                    <div className='trusted-cn-2-icons-cn'>
                        <a href="www.facebook.com"><RiFacebookBoxLine className='trusted-F-social-icon' />
                        </a>
                        <a href="www.linkedin.com"><CiLinkedin className='trusted-F-social-icon' />
                        </a>
                        <a href="www.instgram.com"><RiInstagramLine className='trusted-F-social-icon' />
                        </a>
                        <a href="www.youtube.com"><CiYoutube className='trusted-F-social-icon ' />
                        </a>
                    </div>
                </div>

                <div className='trusted-cn-3'>
                    <div className='trusted-cn-3-head'>
                        <h5>Trusted by 4,000+ companies</h5>
                    </div>
                    <div className='trusted-cn-3-img'>
                        <img src={images.com1} alt="image" />
                        <img src={images.com2} alt="image" />
                        <img src={images.com3} alt="image" />
                        <img src={images.com4} alt="image" />
                    </div>
                    <div className='trusted-cn-3-img img-margin'>
                        <img src={images.com5} alt="image" />
                        <img src={images.com6} alt="image" />
                        <img src={images.com7} alt="image" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default TrustedSection;