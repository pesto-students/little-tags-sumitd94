import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { productActions } from '../../_actions';
import classNames from './CategoryProducts.module.css';
import Product from './Product/Product';
import Pagination from './Product/Pagination';
import Spinner from '../../components/UI/Spinner/Spinner';

const CategoryProducts = () => {
  const { categoryname } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.allproducts);
  const alert = useSelector((state) => state.alert);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentProduct, setCurrentProduct] = useState([]);
  const [totalProducts, setTotalProducts] = useState(null);
  const pageLimit = 4;

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
      if (categoryname === 'men-clothing') {
        setCurrentProduct(products[categoryname]);
      } else {
        setCurrentProduct(slicedProduct);
      }

      setTotalProducts(products[categoryname].length);
    }
  }, [products, currentPage, categoryname]);
  return (
    <>
      {currentProduct.length === 0 && alert.type !== 'alert-success' && <Spinner />}
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
      {categoryname !== 'men-clothing' && (
      <div>
        <Pagination
          totalRecords={totalProducts}
          handlePageClick={handlePageClick}
          pageLimit={pageLimit}
          currentPage={currentPage}
        />
      </div>
      )}
    </>
  );
};

export default CategoryProducts;
