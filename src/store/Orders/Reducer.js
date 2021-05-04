import { ORDER_CONSTANTS } from '../../AppConstants';

const { ORDER } = ORDER_CONSTANTS;

const initialState = {
  allOrders: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER:
      return {
        allOrders: [...state.allOrders, ...action.carts],
      };
    default:
      return state;
  }
};

export default reducer;
