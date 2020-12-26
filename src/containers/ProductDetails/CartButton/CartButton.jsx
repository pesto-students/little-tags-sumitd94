import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import classNames from './CartButton.module.css';

const CartButton = ({ addToCart }) => (
  <button type="button" className={classNames.CartButton} onClick={addToCart}>
    <FontAwesomeIcon icon={faShoppingCart} />
    ADD TO CART
  </button>
);

CartButton.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default CartButton;
