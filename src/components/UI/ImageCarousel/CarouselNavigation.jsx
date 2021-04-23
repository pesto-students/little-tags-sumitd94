/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React from 'react';
import arrowRight from '../../../assets/images/arrow-right-white.svg';

const CarouselNavigation = ({ handleClick }) => (
  <button onClick={handleClick} type="button" className="carousel-next-btn btn-flat">
    <img src={arrowRight} />
  </button>
);

export default CarouselNavigation;
