/*  eslint import/no-cycle: [0, { maxDepth: 2 }]  */

import { productService } from '../_services';
import { productConstants } from '../_constants';
import { alertActions } from '.';

function getAllProducts() {
  console.log('getall called');
  return async (dispatch) => {
    let productLists;
    try {
      productLists = await productService.getAllProduct();
      dispatch({ type: productConstants.GETALL, productList: productLists });
    } catch (err) {
      console.log('err', err);
      dispatch(alertActions.error(err));
    }
  };
}

const productActions = {
  getAllProducts,
};

export default productActions;
