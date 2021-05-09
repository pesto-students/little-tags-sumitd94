import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classNames from './Cart.module.css';

import ProductCard from './ProductCard';
import CartValueDetails from './CartValueDetails';

const Cart = ({ history }) => {
  const { cartDetails } = useSelector((state) => state.cart);
  const { userAddress } = useSelector((state) => state.address);

  const proceedHandler = () => {
    if (userAddress.length > 0) {
      history.push('/checkout');
    } else {
      history.push('/new-address');
    }
  };

  return (
    <>
      <h2>My Cart</h2>
      {!cartDetails?.length ? (
        <h3>Your Cart is Empty</h3>
      ) : (
        <div className={classNames.cartContainer}>
          <ul>
            {cartDetails.map((product, index) => (
              <li key={product.id}>
                <ProductCard product={product} index={index} />
              </li>
            ))}
          </ul>
          <CartValueDetails proceedHandler={proceedHandler} />
        </div>

      )}
    </>
  );
};

Cart.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(Cart);
