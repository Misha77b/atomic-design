import React from 'react';
import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ColorSlider.scss"
import EllipsIcon from '../../Atoms/EllipsIcon/EllipsIcon';

const ColorSlider = (props) => {
  const settings = {
    focusOnSelect: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
  };

  return (
    <Slider className={props.sliderClassName} {...settings}>
      <div>
        <EllipsIcon fillColor={"#FFFFFF"} />
      </div>
      <div>
        <EllipsIcon fillColor={"#DD7878"} />
      </div>
      <div>
        <EllipsIcon fillColor={"#C31212"} />
      </div>
      <div>
        <EllipsIcon fillColor={"#3D8CAE"} />
      </div>
      <div>
        <EllipsIcon fillColor={"#63903F"} />
      </div>
      <div>
        <EllipsIcon fillColor={"#FBAC5A"} />
      </div>
      <div>
        <EllipsIcon fillColor={"#FFC0CB"} />
      </div>
      <div>
        <EllipsIcon fillColor={"#663399"} />
      </div>
    </Slider>
  );
};

export default ColorSlider;
