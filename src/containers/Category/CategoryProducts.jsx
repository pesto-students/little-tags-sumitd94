import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredProducts } from '../../store/Products/Actions';
import classNames from './CategoryProducts.module.css';
import Product from './Product/Product';
import Spinner from '../../components/UI/Spinner/Spinner';

const CategoryProducts = () => {
  const { categoryname } = useParams();
  const dispatch = useDispatch();
  const {
    allProducts, filteredProducts, isFetchingProducts,
  } = useSelector((state) => state.products);
  console.log(allProducts);

  useEffect(() => {
    console.log('running useeffect');
    dispatch(getFilteredProducts(categoryname, allProducts));
  }, [categoryname]);
  return (
    <>
      {isFetchingProducts && <Spinner />}
      <div className={classNames.productLists}>
        <h2>
          All
          {' '}
          { categoryname === 'electronics' ? 'Accessories' : categoryname }
        </h2>
        <ul>
          {filteredProducts.map((product) => (
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
