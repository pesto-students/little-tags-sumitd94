import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { productActions } from '../../_actions';
import classNames from './CategoryProducts.module.css';
import Product from './Product/Product';

const CategoryProducts = () => {
  const { categoryname } = useParams();
  const dispatch = useDispatch();
  const allproducts = useSelector((state) => state.products.allproducts);
  console.log(allproducts);

  useEffect(() => {
    dispatch(productActions.getAllProducts());
    console.log('cate', categoryname);
  }, []);

  console.log('test');
  return (
    <>
      <div className={classNames.productLists}>
        <h2>
          All
          {' '}
          { categoryname }
        </h2>
        <ul>
          { allproducts.length > 0 && allproducts.map((product) => (
            <li key={product.id}>
              <Product product={product} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategoryProducts;
