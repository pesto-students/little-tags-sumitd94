/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classNames from './Product.module.css';

const Product = ({ product, history, categoryname }) => {
  const productDetailsHandler = (productID) => {
    history.push(`/product/${categoryname}/${productID}`);
  };
  console.log(product);

  return (
    <div className={classNames.productContainer} onClick={() => productDetailsHandler(product.id)}>
      <img src={`/images/${product.image[0]}`} alt={product.title} />
      <p>{product.title}</p>
      <p className={classNames.price}>
        $
        {' '}
        {product.price}
      </p>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    price: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  categoryname: PropTypes.string.isRequired,
};

export default withRouter(Product);
