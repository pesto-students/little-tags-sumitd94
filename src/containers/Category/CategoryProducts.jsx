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
      <h2 className={classNames.headingText}>
        { categoryname === 'men-clothing' ? 'Mens Clothing' : categoryname }
        {' '}
        -
        {' '}
        <span>{`${filteredProducts.length} Items`}</span>
      </h2>
      <div className={classNames.productLists}>
        {filteredProducts.map((product) => (
          <Product product={product} categoryname={categoryname} />
        ))}
      </div>
    </>
  );
};

export default CategoryProducts;
