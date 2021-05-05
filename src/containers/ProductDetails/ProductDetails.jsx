/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ProductSizes from './ProductSizes/ProductSizes';
import alertActions from '../../store/Alerts/Actions';
import cartActions from '../../store/Cart/Actions';

import ImageCarousel from '../../components/UI/ImageCarousel/ImageCarousel';

import './ProductDetails.css';

const ProductDetails = () => {
  const [productData, setProductData] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { categoryname, productId } = useParams();
  const [size, setSize] = useState();
  const dispatch = useDispatch();
  const { filteredProducts } = useSelector((state) => state.products);
  const { loggedIn } = useSelector((state) => state.authentication);

  useEffect(() => {
    const currentProduct = filteredProducts.filter((product) => (
      product.id.toString() === productId.toString()
    ));
    setProductData(currentProduct);
  }, [filteredProducts]);

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
    <div className="grid-40-60-layout product-detail-card shadow-box">
      <div>
        {productData[0] && <ImageCarousel images={productData[0].image} height={400} width={300} />}
      </div>
      <div className="card-horizontal vertical-middle">
        <div className="text-container">
          <h3>{productData[0] && productData[0].title}</h3>
          <p>HRX</p>
          <p>
            <span className="discounted-price">
              $
              {(productData[0] && productData[0].price * (50)) / 100}
            </span>
            <span className="product-price">
              $
              {productData[0] && productData[0].price}
            </span>
            {' '}
            <span className="discount">
              (50% OFF)
            </span>
          </p>
          <p className="tax-text">
            inclusive of all taxes
          </p>

          <div className="filter-divider-line" />

          <ul className="list-style-none styled-list">
            <li>
              <span>Fast delivery available</span>
            </li>
            <li>
              <span>Price displayed is inclusive of GST</span>
            </li>
            <li>
              <span>
                Currently in stock
              </span>
            </li>
          </ul>
          <div className="quantity-container">
            <div
              className="value-btn"
              id="decrease"
              onClick={() => decreaseQuantity()}
            >
              -
            </div>
            <input className="number" type="number" value={quantity} />
            <div
              className="value-btn"
              id="increase"
              onClick={() => increaseQuantity()}
            >
              +
            </div>
          </div>
          <div className="cart-container">
            <button type="button" onClick={addToCart} className="cart-btn">
              <FontAwesomeIcon icon={faShoppingCart} />
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  // <div className={classNames.productDetailsContainer}>
  //   <div className={classNames.productImage}>
  //     {productData[0] && <ImageCarousel images={productData[0].image} height={400} width={300} />}
  //   </div>
  //   <div className={classNames.productDetails}>
  //     <p><b>{productData[0] && productData[0].title}</b></p>
  //     <p>
  //       $
  //       {productData[0] && productData[0].price}
  //     </p>
  //     <p className={classNames.productDesc}>
  //       {productData[0] && productData[0].description}
  //     </p>
  //     <p><b>Size</b></p>
  //     <ProductSizes selectSize={handleSize} category={categoryname} />
  //     <div className={classNames.quantityContainer}>
  //       <div
  //         className={classNames.valueBtn}
  //         id={classNames.decrease}
  //         onClick={() => decreaseQuantity()}
  //       >
  //         -
  //       </div>
  //       <input className={classNames.number} type="number" value={quantity} />
  //       <div
  //         className={classNames.valueBtn}
  //         id={classNames.increase}
  //         onClick={() => increaseQuantity()}
  //       >
  //         +
  //       </div>
  //     </div>
  //     <button type="button" className={classNames.CartButton} onClick={addToCart}>
  //       <FontAwesomeIcon icon={faShoppingCart} />
  //       ADD TO CART
  //     </button>
  //   </div>
  // </div>
  );
};

export default ProductDetails;
