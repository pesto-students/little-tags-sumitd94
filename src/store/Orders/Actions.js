/*  eslint import/no-cycle: [0, { maxDepth: 2 }]  */
import cartActions from '../Cart/Actions';
import { ORDER_CONSTANTS } from '../../AppConstants';

const { ORDER } = ORDER_CONSTANTS;

// pass all the items along with properties of the cart from view
function orderNow(allCarts) {
  return (dispatch) => {
    dispatch(cartActions.clearCart());
    dispatch({ type: ORDER, carts: allCarts });
  };
}

const orderActions = {
  orderNow,
};

export default orderActions;
