import getAllProducts from '../../utils/service-request';
import { PRODUCT_CONSTANTS } from '../../AppConstants';
import alertActions from '../Alerts/Actions';

const { GETALL } = PRODUCT_CONSTANTS;

const fetchProducts = (category) => async (dispatch) => {
  try {
    const { products } = await getAllProducts(category);

    if (Array.isArray(products) && products.length > 0) {
      dispatch({
        type: GETALL,
        productList: products,
        category,
      });
    } else {
      dispatch(alertActions.error('Oops! Cannot fetch products'));
    }

    return;
  } catch (err) {
    dispatch(alertActions.error(err.toString()));
  }
};

export default fetchProducts;
