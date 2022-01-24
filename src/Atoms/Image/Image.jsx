import React from 'react';
import './Image.scss'

const Image = (props) => {
  return (
    // className={props.product-image}
    <img id={props.id} className='product-image' src={props.imgSrc} alt="product-img" />
    );
};

export default Image;
