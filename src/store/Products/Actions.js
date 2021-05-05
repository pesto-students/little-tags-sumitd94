import getAllProducts from '../../utils/service-request';
import { PRODUCT_CONSTANTS } from '../../AppConstants';
import alertActions from '../Alerts/Actions';

const { GETALL, FILTERED_PRODUCTS, SPINNER } = PRODUCT_CONSTANTS;

const fetchProducts = () => async (dispatch) => {
  try {
    const { products } = await getAllProducts();

    if (Array.isArray(products) && products.length > 0) {
      dispatch({
        type: GETALL,
        products,
      });
    } else {
      dispatch(alertActions.error('Oops! Cannot fetch products'));
    }

    return;
  } catch (err) {
    dispatch(alertActions.error(err.toString()));
  }
};

const getFilteredProducts = (category, products) => (dispatch) => {
  console.log(products);
  const filteredProducts = products.filter((product) => product.category === category);
  dispatch({ type: SPINNER });
  setTimeout(() => {
    dispatch({ type: FILTERED_PRODUCTS, filteredProducts });
  }, 1000);
};

export { fetchProducts, getFilteredProducts };
