import { orderConstants } from '../_constants';

const initialState = {
  allOrders: [],
};

function order(state = initialState, action) {
  switch (action.type) {
    case orderConstants.ORDER:
      return {
        allOrders: [...state.allOrders, action.cart],
      };
    default:
      return state;
  }
}

export default order;
