import { PRODUCT_CONSTANTS } from '../../AppConstants';

const { GETALL, FILTERED_PRODUCTS, SPINNER } = PRODUCT_CONSTANTS;

const initialState = {
  allProducts: [],
  filteredProducts: [],
  isFetchingProducts: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GETALL:
      return {
        ...state,
        allProducts: action.products,
      };
    case FILTERED_PRODUCTS:
      return {
        ...state,
        isFetchingProducts: false,
        filteredProducts: action.filteredProducts,
      };
    case SPINNER:
      return {
        ...state,
        isFetchingProducts: !state.isFetchingProducts,
      };
    default:
      return state;
  }
}

export default reducer;
