/* eslint-disable react/prop-types */
import React from 'react';

const CarouselContent = ({
  translate, transition, width, children,
}) => (

  <div className="carousel-frame">
    <div
      className="carousel-content"
      style={{
        transform: `translateX(-${translate}px)`,
        transition: `transform ease-out ${transition}s`,
        width: `${width}px`,
      }}
    >
      { children }
    </div>
  </div>

);

export default CarouselContent;
