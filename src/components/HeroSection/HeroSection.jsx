import React from 'react';
import './HeroSection.scss';
import { images } from '../../constants';
import { ButtonSectionNew } from '../';
import { FaPlus, FaMinus } from "react-icons/fa6";


const HeroSection = () => {
    return (
        <>
            <div className='HeroSection-container'>

                <div className='h-cn-1'>
                    <span>Home / New / Organikare Coffee Scrub</span>
                </div>

                <div className='h-main-container'>

                    <div className='h-container-1'>


                        <div className='h-cn-2'>
                            <img className='h-img' src={images.p6} alt="images" />
                        </div>
                        <div className='h-cn-3'>
                            <img className='h-img1 h-border' src={images.p6} alt="images" />
                            <img className='h-img1' src={images.p7} alt="images" />
                            <img className='h-img1' src={images.p5} alt="images" />
                            <img className='h-img1' src={images.p8} alt="images" />
                            <img className='h-img1' src={images.p1} alt="images" />
                            <img className='h-img1' src={images.p5} alt="images" />
                        </div>
                    </div>

                    <div className='h-container-2'>
                        <div className='h-sec'>
                            <h3>$69</h3>
                            <div style={{ alignItems: 'center' }}>
                                <span style={{ fontSize: '14px' }}>⭐⭐⭐⭐⭐</span>   <span>4.8/5 Star rating</span>
                            </div>
                            <h4>Organikare Coffee Scrub</h4><br />
                            <span>Enriched with the distinctive blend of Coffee and Apricot <br />
                                seed. Organikare's Coffee Scrub is the perfect match <br />
                                between your exfoliate-thirsty sin and busy schedule.</span><br /><br />
                            <span>Coffee beans'e excellent cleansing and scrubbing properties <br /> unclog pores, eliminate blackheads and remove dead cells <br />
                                from the surface of your skin while maintaining skin's <br />
                                elasticity. </span>
                        </div>
                        <div className='h-btn-cn'>
                            <ButtonSectionNew />
                        </div>
                        <div className='h-details-cn'>
                            <div className='h-details-cn1'>
                                <span>Details</span>
                                <FaMinus />
                            </div>
                            <div>
                                <ul>
                                    <li>Cut, sewn, and dyed in Los Angeles</li>
                                    <li>Garment dyed</li>
                                    <li>Pre-shrunk</li>
                                    <li>Soft 100% ringspun cotton</li>
                                    <li>Printed with water-based in</li>
                                </ul>
                            </div>

                            <div className='h-details-cn1'>
                                <span>Shipping & Returns</span>
                                <FaPlus />
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default HeroSection;