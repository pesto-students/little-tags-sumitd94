import { CART_CONSTANTS } from '../../AppConstants';

const {
  ADDCART, UPDATECART, REMOVECART, CLEARCART,
} = CART_CONSTANTS;

const initialState = {
  cartDetails: [],
};

function removeFromCart(allCart, pid) {
  const newCart = { cartDetails: [] };
  if (allCart.length > 0) {
    newCart.cartDetails.filter((productid) => productid !== pid);
  }
  return newCart;
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADDCART:
      return { cartDetails: [...state.cartDetails, action.cartdetails] };
    case UPDATECART:
      return { cartDetails: action.cartdetails };
    case REMOVECART:
      return removeFromCart(state.cartDetails, action.productid);
    case CLEARCART:
      return { cartDetails: [] };
    default:
      return state;
  }
}

export default reducer;
