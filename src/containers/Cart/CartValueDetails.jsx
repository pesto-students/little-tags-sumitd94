import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import classNames from './CartValueDetails.module.css';

import Button from '../../components/UI/Button/Button';

const CartValueDetails = ({ proceedHandler }) => {
  const { cartDetails } = useSelector((state) => state.cart);

  const calculateCardData = (products) => products.reduce((sum, product) => (
    {
      totalMRP: sum.totalMRP + product.price * product.quantity,
      discount: sum.discount + (Number(product.price) * Number(product.quantity) * 50) / 100,
    }
  ),
  { totalMRP: 0, discount: 0 });

  const { totalMRP, discount } = calculateCardData(cartDetails);
  const totalAmount = totalMRP - discount;

  return (
    <div className={classNames.CartValueContainer}>
      <div className={classNames.coupon}>
        COUPONS
      </div>
      <button
        type="button"
        onClick={() => {}}
        style={{ textAlign: 'left' }}
        className={classNames.couponsBtn}
      >
        <span className={classNames.btnIcon}>
          <i className="fas fa-tag" />
        </span>
        Apply Coupon
      </button>
      <div className={classNames.priceDetails}>
        PRICE DETAILS:
        {' '}
        (
        {`${cartDetails.length} Items`}
        )
      </div>
      <div className={classNames.checkoutDetails}>
        <div className={classNames.title}>
          Total MRP
        </div>
        <div className={classNames.value}>
          {`$${totalMRP.toFixed(2)}`}
        </div>
      </div>
      <div className={classNames.checkoutDetails}>
        <div className={classNames.title}>
          Discount on MRP
        </div>
        <div className={classNames.value} style={{ color: '#03a685' }}>
          {`$${discount.toFixed(2)}`}
        </div>
      </div>
      <div className={classNames.checkoutDetails} style={{ fontWeight: '700', fontSize: '1rem' }}>
        <div className={classNames.title}>
          Total Amount
        </div>
        <div className={classNames.value}>
          {`$${totalAmount.toFixed(2)}`}
        </div>
      </div>
      <Button text="Proceed To Checkout" clickHandler={proceedHandler} />
    </div>
  );
};

CartValueDetails.propTypes = {
  proceedHandler: PropTypes.func.isRequired,
};

export default CartValueDetails;
