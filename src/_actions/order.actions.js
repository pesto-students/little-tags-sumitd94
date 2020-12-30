/*  eslint import/no-cycle: [0, { maxDepth: 2 }]  */
import { cartActions } from '.';
import { orderConstants } from '../_constants';

// pass all the items along with properties of the cart from view
function orderNow(allCarts) {
  return (dispatch) => {
    dispatch(cartActions.clearCart);
    dispatch({ type: orderConstants.ORDER, allCarts });
  };
}

const orderActions = {
  orderNow,
};

export default orderActions;
