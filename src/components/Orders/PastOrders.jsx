import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../../containers/Category/Product/Product';
import classNames from '../../containers/Category/CategoryProducts.module.css';

const PastOrders = () => {
  console.log('hi');

  const orders = useSelector((state) => state.order.allOrders);

  return (
    <div className={classNames.productLists}>
      <h2>
        Past Orders
      </h2>
      <ul>
        {orders.map((product) => (
          <li key={product.productid}>
            <Product product={product.productData[0]} categoryname="Past Orders" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PastOrders;
