import { productConstants } from '../_constants';

const initialState = {
  allproducts: {},
};

function products(state = initialState, action) {
  switch (action.type) {
    case productConstants.GETALL:
      return {
        allproducts: {
          ...state.allproducts,
          [action.category]: action.productList,
        },
      };
    default:
      return state;
  }
}

export default products;
