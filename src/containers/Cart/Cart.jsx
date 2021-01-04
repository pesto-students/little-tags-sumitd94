import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classNames from './Cart.module.css';
import Product from '../Category/Product/Product';
import Button from '../../components/UI/Button/Button';

const Cart = ({ history }) => {
  const cartDetails = useSelector((state) => state.cart.allCarts);
  const address = useSelector((state) => state.authentication.address);

  function getCategory(category) {
    return category.toLowerCase().replace(/ /g, '-');
  }

  const proceedHandler = () => {
    if (address.length > 0) {
      history.push('/checkout');
    } else {
      // render to add an address
      history.push('/checkout');
    }
  };

  return (
    <>
      <div className={classNames.productLists}>
        <h2>
          Your Cart
        </h2>
        <ul>
          {cartDetails.length > 0 && cartDetails.map((product) => (
            <li key={product.productid}>
              <Product
                product={product.productData[0]}
                categoryname={getCategory(product.productData[0].category)}
              />
            </li>
          ))}
        </ul>
        <Button text="Proceed" clickHandler={proceedHandler} />
      </div>
    </>
  );
};

Cart.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(Cart);
