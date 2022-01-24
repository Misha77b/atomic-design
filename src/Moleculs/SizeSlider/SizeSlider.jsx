import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SizeSlider.scss"

const SizeSlider = (props) => {
  const settings = {
    focusOnSelect: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  return (
    <>
      <Slider className={props.sliderClassName} {...settings}>
        <div  onClick={props.onClick} className='size-item-container'>
          <span className='size-slider-item'>XL</span>
        </div>
        <div  onClick={props.onClick} className='size-item-container'>
          <span className='size-slider-item'>S</span>
        </div>
        <div  onClick={props.onClick} className='size-item-container'>
          <span className='size-slider-item'>L</span>
        </div>
        <div  onClick={props.onClick} className='size-item-container'>
          <span className='size-slider-item'>M</span>
        </div>
        <div  onClick={props.onClick} className='size-item-container'>
          <span className='size-slider-item'>XS</span>
        </div>
        <div  onClick={props.onClick} className='size-item-container'>
          <span className='size-slider-item'>S</span>
        </div>
      </Slider>
    </>
  );
};

export default SizeSlider;
