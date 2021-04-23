/* eslint-disable react/prop-types */
import React from 'react';
import CarouselIndicator from './CarouselIndicator';

const CarouselIndicators = ({ images, activeIndex }) => (
  <div className="carousel-indicators">
    {images.map((image, index) => (
      <CarouselIndicator
        key={`navigator-${image}`}
        active={index === activeIndex}
      />
    ))}
  </div>
);

export default CarouselIndicators;
