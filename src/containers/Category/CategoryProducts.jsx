import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { productActions } from '../../_actions';
import classNames from './CategoryProducts.module.css';
import Product from './Product/Product';
import Pagination from './Product/Pagination';

const CategoryProducts = () => {
  const { categoryname } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.allproducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentProduct, setCurrentProduct] = useState([]);
  const [totalProducts, setTotalProducts] = useState(null);
  const pageLimit = 2;

  const handlePageClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  useEffect(() => {
    if (!(categoryname.toString() in products)) {
      dispatch(productActions.getAllProducts(categoryname));
    }

    if (categoryname in products) {
      // Logic for displaying current page products
      const indexOfLastProduct = currentPage * pageLimit;
      const indexOfFirstProduct = indexOfLastProduct - pageLimit;
      const slicedProduct = products[categoryname].slice(indexOfFirstProduct, indexOfLastProduct);
      setCurrentProduct(slicedProduct);
      setTotalProducts(products[categoryname].length);
    }
  }, [products, currentPage]);
  return (
    <>
      <div className={classNames.productLists}>
        <h2>
          All
          {' '}
          { categoryname === 'electronics' ? 'Accessories' : categoryname }
        </h2>
        <ul>
          {currentProduct.map((product) => (
            <li key={product.id}>
              <Product product={product} categoryname={categoryname} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Pagination
          totalRecords={totalProducts}
          handlePageClick={handlePageClick}
          pageLimit={pageLimit}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default CategoryProducts;
