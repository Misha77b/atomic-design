import React from 'react';

const Price = (props) => {
  return (
      <span id={props.id} className={props.priceClassName}> {props.price} </span>
  );
};

export default Price;
