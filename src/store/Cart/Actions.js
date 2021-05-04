/*  eslint import/no-cycle: [0, { maxDepth: 2 }]  */
import PropTypes from 'prop-types';
import alertActions from '../Alerts/Actions';
import { CART_CONSTANTS } from '../../AppConstants';

function addToCart(product) {
  return (dispatch) => {
    dispatch({ type: CART_CONSTANTS.ADDCART, cartdetails: product });
    dispatch(alertActions.success('Product has been added to cart'));
  };
}

function updateCart(product) {
  return (dispatch) => {
    dispatch({ type: CART_CONSTANTS.UPDATECART, cartdetails: product });
  };
}

function removeCart(productid) {
  return (dispatch) => {
    dispatch({ type: CART_CONSTANTS.REMOVECART, productid });
    dispatch(alertActions.success('Product has been removed from the cart'));
  };
}

function clearCart() {
  return (dispatch) => {
    dispatch({ type: CART_CONSTANTS.CLEARCART });
  };
}

const cartActions = {
  addToCart,
  updateCart,
  removeCart,
  clearCart,
};

addToCart.propTypes = {
  productid: PropTypes.string.isRequired,
};

export default cartActions;
