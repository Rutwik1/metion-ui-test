import React from 'react';
import './Reviews.scss';
import { FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { reviewsData } from '../../constants';



const Reviews = () => {
    return (

        <>
            <div className='Reviews-section'>
                <div className='v-text'>
                    <span>Voice Of Elegance</span>
                </div>
                <div className='c-text'>
                    <span>What our Customers Say</span>
                </div>

                <div className='rev-con-1'>
                    {reviewsData.map((review, index) => (
                        <div className='review-box' key={index}>
                            <div className='profile-img-container'>
                                <img className='profile-img' src={review.profileImg} alt="image" />
                            </div>
                            <div className='name-text'>
                                <h3>{review.name}</h3>
                                <span><FaStar className='star-icon' /> {review.rating}/5 Star rating</span>
                            </div>
                            <div className='des-text'>
                                <span>{review.text}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='next-icon'>
                    <div><IoIosArrowBack /></div>
                    <div>
                        <span ><GoDotFill className='dot-icon dot-icon1 ' /></span>
                        <span><GoDotFill className='dot-icon' /></span>
                        <span ><GoDotFill className='dot-icon dot-icon1' /></span>
                    </div>
                    <div><IoIosArrowForward /></div>
                </div>

            </div>
        </>
    )
}

export default Reviews;