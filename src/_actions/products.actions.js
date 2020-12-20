/*  eslint import/no-cycle: [0, { maxDepth: 2 }]  */
import PropTypes from 'prop-types';
import { productService } from '../_services';
import { productConstants } from '../_constants';
import { alertActions } from '.';

function getAllProducts(category) {
  return async (dispatch) => {
    let productLists;
    try {
      productLists = await productService.getAllProduct();
      const lowercategory = category.toLowerCase();

      if (Array.isArray(productLists)) {
        productLists = productLists.filter((val) => {
          const categorySlug = val.category.toLowerCase().replace(/ /g, '-');
          return categorySlug === lowercategory;
        });

        if (productLists.length > 0) {
          dispatch({
            type: productConstants.GETALL,
            productList: productLists,
            category,
          });
        } else {
          dispatch(alertActions.success('Oops! No Product Found in this category'));
        }
      } else {
        dispatch(alertActions.error('Oops! Cannot get product'));
      }

      return;
    } catch (err) {
      dispatch(alertActions.error(err.toString()));
    }
  };
}

const productActions = {
  getAllProducts,
};

getAllProducts.propTypes = {
  category: PropTypes.string.isRequired,
};

export default productActions;