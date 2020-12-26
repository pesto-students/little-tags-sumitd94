/*  eslint import/no-cycle: [0, { maxDepth: 2 }]  */
import PropTypes from 'prop-types';
import { alertActions } from '.';
import { cartConstants } from '../_constants';

function addToCart(product) {
  return (dispatch) => {
    dispatch({ type: cartConstants.ADDCART, cartdetails: product });
    dispatch(alertActions.success('Product has been added to cart'));
  };
}

function removeCart(productid) {
  return (dispatch) => {
    dispatch({ type: cartConstants.REMOVECART, productid });
    dispatch(alertActions.success('Product has been removed from the cart'));
  };
}

const cartActions = {
  addToCart,
  removeCart,
};

addToCart.propTypes = {
  productid: PropTypes.string.isRequired,
};

export default cartActions;
