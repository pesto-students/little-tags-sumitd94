/* eslint-disable */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from './ProductSizes.module.css';

const ProductSizes = ({ selectSize }) => {

  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  const handleSlection = (size) => {
    selectSize(size);
    setSelectedSize(size);
    console.log(selectedSize);
  };

  return (
    <div className={classNames.productSizesContainer}>
      {sizes.map((size, index) => (
        <div onClick={() => handleSlection(size)} key={index} className={`${classNames.sizeBlock} ${selectedSize === size ? classNames.backgroundBlack : ''}`}>
          <span>{size}</span>
        </div>
      ))}
    </div>
  );
};

ProductSizes.propTypes = {
  selectSize: PropTypes.func.isRequired,
};

export default ProductSizes;
