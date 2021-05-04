import { PRODUCT_CONSTANTS } from '../../AppConstants';

const { GETALL } = PRODUCT_CONSTANTS;

const initialState = {
  allproducts: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GETALL:
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

export default reducer;
