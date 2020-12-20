import { cartConstants } from '../_constants';

const initialState = {
  allCarts: [],
};

function removeFromCart(allCart, pid) {
  const newCart = { allCarts: [] };
  if (allCart.length > 0) {
    newCart.allCarts.filter((productid) => productid !== pid);
  }

  return newCart;
}

function cart(state = initialState, action) {
  switch (action.type) {
    case cartConstants.ADDCART:
      return { allCarts: [...state.allCarts, action.productid] };
    case cartConstants.REMOVECART:
      return removeFromCart(state.allCarts, action.productid);
    default:
      return state;
  }
}

export default cart;
