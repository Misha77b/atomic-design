import React from 'react';

const Title = (props) => {
  return (
      <h2 id={props.id} className={props.titleClassName}> {props.title} </h2>
  );
};

export default Title;
