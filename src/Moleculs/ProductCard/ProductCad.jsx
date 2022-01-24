import React, { useState } from 'react';
import Button from '../../Atoms/Button/Button';
import { HeartIcon } from '../../Atoms/HeartIcon/HeartIcon';
import Image from '../../Atoms/Image/Image';
import Price from '../../Atoms/Price/Price';
import Title from '../../Atoms/Title/Title';
import { VectorIcon } from '../../Atoms/VectorIcon/VectorIcon';
import ColorSlider from '../ColorSlider/ColorSlider';
import SizeSlider from '../SizeSlider/SizeSlider';
import { BagIcon } from '../../Atoms/BagIcon/BagIcon';

import './ProductCard.scss'

const ProductCad = (props) => {
    const { products } = props;
    const [isHovering, setIsHovering] = useState(false);
    const [isInCart, setIsInCart] = useState(true)

    const handleMouseEnter = () => {
        setIsHovering(true)
    }

    const handleMouseLeave = () => {
        setIsHovering(false)
    }

    const targetSize = (event) => {
        if(event.target.classList !== 'active') {
            event.target.classList.add("active");
            setIsInCart(false)
        } else {
            event.target.classList.remove("active");
            setIsInCart(true)
        }
    }
    
  return (
    <>
        {products.map((product) => {
            if(product.available) {
                return (
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id={product.id} key={product.id} className='product-card'>
                    <Title id={product.id} titleClassName="product-title" title={product.name} />
                    <Price id={product.id} priceClassName="product-price" price={product.price} />
                    <Image id={product.id} imgSrc={product.img} />
                    {isHovering ? 
                    <>
                        <div className='on-hover-container'>
                            <div className='product-card-btn-container hidden'>
                                <Button 
                                    id={product.id}
                                    btnClassName="vector-btn" 
                                    btnContent={ <VectorIcon vectorClassName="vector-icon" /> } 
                                />
                                <Button 
                                    id={product.id}
                                    btnClassName="heart-btn"
                                    btnContent={ <HeartIcon heartClassName="heart-icon" /> }
                                />
                            </div>
                        </div>
                        <div className='sliders-panel color-pane'>
                            <ColorSlider sliderClassName="color-slider" />
                        </div>
                        <div className='sliders-panel size-panel'>
                            <SizeSlider  onClick={targetSize} sliderClassName="size-slider" />
                            {isInCart ? <BagIcon bagIconCLassName="bag-icon" /> : null}
                        </div>
                    </> : null}
                </div>
            )} else {
                return(
                    <div key={product.id} className='product-card not-available'>
                    <Title titleClassName="product-title" title={product.name} />
                    <Price priceClassName="product-price" price={product.price} />
                    <Image imgSrc={product.img} />
                    <div className='out-of-stock'>
                        <div className='out-of-stock-alert'>Out Of Stock</div>
                    </div>
                </div>
                )
            }
        })}
    </>
  );
};

export default ProductCad;