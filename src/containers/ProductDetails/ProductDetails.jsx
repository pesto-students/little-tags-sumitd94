import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import classNames from './ProductDetails.module.css';
import ProductSizes from './ProductSizes/ProductSizes';
import CartButton from './CartButton/CartButton';

const ProductDetails = () => {
  const [productData, setProductData] = useState([]);
  const { categoryname, productId } = useParams();
  const allProducts = useSelector((state) => state.products.allproducts);

  useEffect(() => {
    const currentProduct = allProducts[categoryname].filter((product) => (
      product.id === parseInt(productId, 10)
    ));
    setProductData(currentProduct);
  }, []);

  return (
    <div className={classNames.productDetailsContainer}>
      <div className={classNames.productImage}>
        <img src={productData[0] && productData[0].image} alt="title" />
      </div>
      <div className={classNames.productDetails}>
        <p><b>{productData[0] && productData[0].title}</b></p>
        <p>
          $
          {productData[0] && productData[0].price}
        </p>
        <p>
          {productData[0] && productData[0].description}
        </p>
        <p><b>Size</b></p>
        <ProductSizes />
        <CartButton />
      </div>
    </div>
  );
};

export default ProductDetails;
