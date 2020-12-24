import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import classNames from './CartButton.module.css';

const CartButton = () => (
  <button type="button" className={classNames.CartButton}>
    <FontAwesomeIcon icon={faShoppingCart} />
    ADD TO CART
  </button>
);

export default CartButton;
