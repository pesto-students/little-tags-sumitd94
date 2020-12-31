/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classNames from './Cart.module.css';
import Product from '../Category/Product/Product';
import Button from '../../components/UI/Button/Button';

const Cart = (props) => {
  const cartDetails = useSelector((state) => state.cart.allCarts);
  const address = useSelector((state) => state.authentication.address);

  function getCategory(category) {
    return category.toLowerCase().replace(/ /g, '-');
  }

  const proceedHandler = () => {
    if (address.length > 0) {
      props.history.push('/address');
    } else {
      // render to add an address
      props.history.push('/address');
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

export default withRouter(Cart);
