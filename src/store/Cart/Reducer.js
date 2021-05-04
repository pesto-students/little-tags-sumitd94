import { CART_CONSTANTS } from '../../AppConstants';

const {
  ADDCART, UPDATECART, REMOVECART, CLEARCART,
} = CART_CONSTANTS;

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

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADDCART:
      return { allCarts: [...state.allCarts, action.cartdetails] };
    case UPDATECART:
      return { allCarts: action.cartdetails };
    case REMOVECART:
      return removeFromCart(state.allCarts, action.productid);
    case CLEARCART:
      return { allCarts: [] };
    default:
      return state;
  }
}

export default reducer;
