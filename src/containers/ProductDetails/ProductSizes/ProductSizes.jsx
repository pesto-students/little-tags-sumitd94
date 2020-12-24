/* eslint-disable react/no-array-index-key */
import React from 'react';
import classNames from './ProductSizes.module.css';

const ProductSizes = () => {
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  return (
    <div className={classNames.productSizesContainer}>
      {sizes.map((size, index) => (
        <div key={index} className={classNames.sizeBlock}>
          {size}
        </div>
      ))}
    </div>
  );
};

export default ProductSizes;
