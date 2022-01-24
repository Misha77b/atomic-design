import React from 'react';

const Button = (props) => {
  return (
      <button id={props.id} className={props.btnClassName}> {props.btnContent} </button>
  );
};

export default Button;
