/* eslint-disable react/prop-types */
import React from 'react';

const CarouselItem = ({ content }) => (
  <div className="carousel-item" style={{ backgroundImage: `url(/images/${content})` }} />
);

export default CarouselItem;
