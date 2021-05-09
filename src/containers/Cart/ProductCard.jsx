/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from './ProductCard.module.css';

import cartActions from '../../store/Cart/Actions';

const ProductCard = ({ product, index }) => {
  const { cartDetails } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const increaseQuantity = (currProd, idx) => {
    const updatedCart = [...cartDetails];
    const updatedQty = currProd.quantity + 1;
    updatedCart[idx].quantity = updatedQty;
    dispatch(cartActions.updateCart(updatedCart));
  };

  const decreaseQuantity = (currProd, idx) => {
    const updatedCart = [...cartDetails];
    const updatedQty = currProd.quantity - 1;
    updatedCart[idx].quantity = updatedQty;
    dispatch(cartActions.updateCart(updatedCart));
  };

  return (
    <div className={classNames.productContainer}>
      <div className={classNames.imageContainer}>
        <Link
          to={`/product/${product.categoryname}/${product.id}`}
          className={classNames.linkNoStyle}
        >
          <img
            src={`/images/${product.image[0]}`}
            alt={product.title}
          />
        </Link>
      </div>
      <div className={classNames.detailsContainer}>
        <Link
          to={`/product/${product.categoryname}/${product.id}`}
          className={classNames.linkNoStyle}
        >
          <div className={classNames.titleContainer}>
            <span>{product.title}</span>
          </div>
        </Link>
        <div className={classNames.priceContainer}>
          <p className={classNames.discountedPrice}>
            $
            {(product.price * product.quantity * 50) / 100}
            {' '}
            <>
              <span className={classNames.totalPrice}>
                Rs.
                {product.price * product.quantity}
              </span>
              {' '}
              <span className={classNames.discount}>(50% OFF)</span>
            </>
          </p>
        </div>
        <div className={classNames.qtyContainer}>
          <div
            role="button"
            onKeyDown={() => decreaseQuantity(product, index)}
            tabIndex={0}
            className={classNames.valueBtn}
            id="decrease"
            onClick={() => decreaseQuantity(product, index)}
          >
            -
          </div>
          <input className={classNames.number} type="number" value={product.quantity} />
          <div
            role="button"
            onKeyDown={() => increaseQuantity(product, index)}
            tabIndex={0}
            className={classNames.valueBtn}
            id="increase"
            onClick={() => increaseQuantity(product, index)}
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    categoryname: PropTypes.string,
    image: PropTypes.array,
    quantity: PropTypes.number,
    price: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProductCard;
