import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import classNames from './ProductDetails.module.css';
import ProductSizes from './ProductSizes/ProductSizes';
import CartButton from './CartButton/CartButton';
import { productActions, cartActions, alertActions } from '../../_actions';

const ProductDetails = () => {
  const [productData, setProductData] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const { categoryname, productId } = useParams();
  const [size, setSize] = useState();
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.allproducts);

  useEffect(() => {
    if (categoryname in allProducts) {
      const currentProduct = allProducts[categoryname].filter((product) => (
        product.id === parseInt(productId, 10)
      ));
      setProductData(currentProduct);
    } else {
      dispatch(productActions.getAllProducts(categoryname));
    }
  }, [allProducts]);

  const handleSize = (getsize) => {
    setSize(getsize);
  };

  const addToCart = () => {
    console.log('addthis', size, productData[0].id);
    if (quantity > 0) {
      dispatch(cartActions.addToCart({
        quantity,
        productid: productData[0].id,
        size,
      }));
    } else {
      dispatch(alertActions.error('Please Select Quantity of the Item'));
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(quantity === 0 ? 0 : (quantity - 1));
  };

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
        <ProductSizes selectSize={handleSize} />
        <CartButton addToCart={addToCart} />
        <div className={classNames.quantityContainer}>
          <button type="button" onClick={() => decreaseQuantity()}>-</button>
          <input type="number" value={quantity} />
          <button type="button" onClick={() => increaseQuantity()}>+</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
