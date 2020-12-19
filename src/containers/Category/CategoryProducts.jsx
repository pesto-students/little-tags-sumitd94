import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { productActions } from '../../_actions';

const CategoryProducts = () => {
  const { categoryname } = useParams();
  const dispatch = useDispatch();
  const allproducts = useSelector((state) => state.products.allproducts);

  useEffect(() => {
    dispatch(productActions.getAllProducts());
    console.log('cate', categoryname);
  }, []);

  return (
    <>
      <div className="product_list">
        <h2>
          Category :&nbsp;
          {categoryname}
        </h2>
        <ul>
          { allproducts.length > 0 && allproducts.map((el) => (
            <li>{`${el.category} - ${el.title}`}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategoryProducts;
