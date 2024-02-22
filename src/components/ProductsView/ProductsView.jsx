import React from 'react';
import './ProductsView.scss';
import { images } from '../../constants';
import { ButtonSection } from '../';


const ProductsView = () => {
    return (
        <>
            <div className='pv-img-cn'>
                <div className='pv-img'>
                    <img src={images.p1} alt="image" />
                </div>
                <div className='pv-img'>
                    <img src={images.p5} alt="image" />
                </div>
                <div>
                    <div>
                        <h4>Natural ingredients</h4>
                        <span>We always chosse the finest natural ingredients, then <br /> expertly blend them to benefit your hair, sin, and mind.</span>
                    </div>
                    <div className='pv-btn-cn'>
                        <ButtonSection className='pv-btn' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsView;