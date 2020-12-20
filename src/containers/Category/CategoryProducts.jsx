import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { productActions } from '../../_actions';

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
      <div className="product_list">
        <h2>
          Category :&nbsp;
          {categoryname}
        </h2>
        <ul>
          { categoryname in products && products[categoryname].map((el) => (
            <li>{`${el.category} - ${el.title}`}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategoryProducts;
