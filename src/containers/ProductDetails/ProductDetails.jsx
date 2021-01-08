/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import classNames from './ProductDetails.module.css';
import ProductSizes from './ProductSizes/ProductSizes';
import { productActions, cartActions, alertActions } from '../../_actions';

const ProductDetails = () => {
  const [productData, setProductData] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const { categoryname, productId } = useParams();
  const [size, setSize] = useState();
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.allproducts);
  const { loggedIn } = useSelector((state) => state.authentication);

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

    if (!loggedIn) {
      dispatch(alertActions.information('Please Login to continue adding product to cart'));
      return;
    }

    if (quantity > 0) {
      dispatch(cartActions.addToCart({
        quantity,
        productid: productData[0].id,
        productData,
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
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
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
        <p className={classNames.productDesc}>
          {productData[0] && productData[0].description}
        </p>
        <p><b>Size</b></p>
        <ProductSizes selectSize={handleSize} />
        <div className={classNames.quantityContainer}>
          <div
            className={classNames.valueBtn}
            id={classNames.decrease}
            onClick={() => decreaseQuantity()}
          >
            -
          </div>
          <input className={classNames.number} type="number" value={quantity} />
          <div
            className={classNames.valueBtn}
            id={classNames.increase}
            onClick={() => increaseQuantity()}
          >
            +
          </div>
        </div>
        <button type="button" className={classNames.CartButton} onClick={addToCart}>
          <FontAwesomeIcon icon={faShoppingCart} />
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
