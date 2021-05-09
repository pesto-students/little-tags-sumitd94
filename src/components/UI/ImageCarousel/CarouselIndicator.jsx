/* eslint-disable react/prop-types */
import React from 'react';

const CarouselIndicator = ({ active }) => (
  <span
    className={`carousel-indicators-item pointer ${active ? 'active' : ''}`}
  />
);

export default CarouselIndicator;
