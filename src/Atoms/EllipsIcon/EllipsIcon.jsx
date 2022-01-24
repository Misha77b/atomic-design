import React from 'react';

const EllipsIcon = (props) => {
    const { fillColor } = props
  return (
    <svg className='color-selector' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <    circle cx="9" cy="9" r="9" fill={fillColor}/>
    </svg>
  );
};

export default EllipsIcon;
