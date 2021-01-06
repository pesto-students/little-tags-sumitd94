import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { productActions } from '../../_actions';
import classNames from './CategoryProducts.module.css';
import Product from './Product/Product';

const CategoryProducts = () => {
  const { categoryname } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.allproducts);

  useEffect(() => {
    if (!(categoryname.toString() in products)) {
      dispatch(productActions.getAllProducts(categoryname));
    }
  }, []);
  return (
    <>
      <div className={classNames.productLists}>
        <h2>
          All
          {' '}
          { categoryname === 'electronics' ? 'Accessories' : categoryname }
        </h2>
        <ul>
          {categoryname in products && products[categoryname].map((product) => (
            <li key={product.id}>
              <Product product={product} categoryname={categoryname} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategoryProducts;
