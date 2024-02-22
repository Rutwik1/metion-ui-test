import React from 'react';
import './OfferBar.scss';
import { IoIosArrowDown } from "react-icons/io";
import { RiFacebookBoxLine, RiInstagramLine } from "react-icons/ri";
import { CiLinkedin, CiYoutube } from "react-icons/ci";



const OfferBar = () => {
    return (

        <>
            <nav className='Offer-container' >

                <div>
                    <span>Euro</span>
                    <IoIosArrowDown className='arrow-down-icon1' />
                </div>

                <div>
                    <span >Save 20% use code: METION20</span>
                </div>

                <div >
                    <a href="www.facebook.com"><RiFacebookBoxLine className='social-icon' />
                    </a>
                    <a href="www.linkedin.com"><CiLinkedin className='social-icon' />
                    </a>
                    <a href="www.instgram.com"><RiInstagramLine className='social-icon' />
                    </a>
                    <a href="www.youtube.com"><CiYoutube className='social-icon last-child' />
                    </a>
                </div>

            </nav>
        </>
    )
}

export default OfferBar;