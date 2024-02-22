import React from 'react';
import './Footer.scss';
import { RiFacebookBoxLine, RiInstagramLine } from "react-icons/ri";
import { CiLinkedin, CiYoutube } from "react-icons/ci";
import { TfiArrowCircleRight } from "react-icons/tfi";
import logo from '../../assets/metion.png';
import { images } from '../../constants';



const Footer = () => {
    return (

        <>
            <footer className='Footer-container'>

                <div className='F-container-1'>

                    <div className='text-1'>
                        <span>Heard <br />Enough?</span>
                    </div>

                    <div className='contact-us-text'>
                        <span>Contact Us</span>
                    </div>

                    <div>
                        <span><TfiArrowCircleRight className='arrow-circle-icon' /></span>
                    </div>

                </div>

                <div className='F-container-2'>

                    <div>
                        <img src={logo} alt="metion" className='F-logo' />
                    </div>

                    <div >
                        <a href="www.facebook.com"><RiFacebookBoxLine className='F-social-icon' />
                        </a>
                        <a href="www.linkedin.com"><CiLinkedin className='F-social-icon' />
                        </a>
                        <a href="www.instgram.com"><RiInstagramLine className='F-social-icon' />
                        </a>
                        <a href="www.youtube.com"><CiYoutube className='F-social-icon last-child' />
                        </a>
                    </div>

                    <div >
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <img src={images.image5} alt="image1" className='img-1' />
                            <img src={images.image2} alt="image2" className='img-1' />
                            <img src={images.image3} alt="image3" className='img-1' />
                            <img src={images.image4} alt="image4" className='img-1' />
                            <img src={images.image1} alt="image5" className='img-1' />
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer;