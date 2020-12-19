import React from 'react';
import PropTypes from 'prop-types';
import classNames from './Product.module.css';

const Product = ({ product }) => (
  <div className={classNames.productContainer}>
    <img src={product.image} alt={product.title} />
    <p>{product.title}</p>
    <p className={classNames.price}>
      $
      {' '}
      {product.price}
    </p>
  </div>
);

Product.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
};

export default Product;
