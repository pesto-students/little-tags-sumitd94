import React from 'react';
import { useSelector } from 'react-redux';
import classNames from './Cart.module.css';
import Product from '../Category/Product/Product';
import Button from '../../components/UI/Button/Button';

const Cart = () => {
  const cartDetails = useSelector((state) => state.cart.allCarts);
  console.log(cartDetails);

  return (
    <>
      <div className={classNames.productLists}>
        <h2>
          Your Cart
        </h2>
        <ul>
          {cartDetails.length > 0 && cartDetails.map((product) => (
            <li key={product.productid}>
              <Product product={product.productData[0]} categoryname="Mens" />
            </li>
          ))}
        </ul>
        <Button text="Proceed" clickHandler={() => {}} />
      </div>
    </>
  );
};

export default Cart;
