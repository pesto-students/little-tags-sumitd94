import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import classNames from './Payment.module.css';
import Button from '../../UI/Button/Button';

const Payment = ({ history }) => {
  const { deliveryAddress } = useSelector((state) => state.address);
  const proceedHandler = () => {
    history.push('/thank-you');
  };

  return (
    <div className={classNames.paymentContainer}>
      <h2>Delivering To</h2>
      <ul className={classNames.addressLists}>
        <li>
          <div className={classNames.address}>
            <span className={classNames.name}>{`${deliveryAddress.firstName} ${deliveryAddress.lastName}`}</span>
            <span>{deliveryAddress.addressLineOne}</span>
            {deliveryAddress.addressLineTwo > '' && <span>{deliveryAddress.addressLineTwo}</span>}
            <span>{`${deliveryAddress.state} ${deliveryAddress.zip}, India`}</span>
            <span>{deliveryAddress.phone}</span>
          </div>
        </li>
      </ul>
      <div className={classNames.paymentMethods}>
        <h2>Method Of Payment</h2>
        <ul className={classNames.paymentMethodLists}>
          <li>
            <input type="radio" name="payment-method" className={classNames.radio} />
            <span>Razor Pay</span>
          </li>
          <li>
            <input type="radio" name="payment-method" className={classNames.radio} />
            <span>Visa / MasterCard / UPI</span>
          </li>
          <li>
            <input type="radio" name="payment-method" className={classNames.radio} />
            <span>PayPal</span>
          </li>
        </ul>
      </div>
      <Button text="Proceed To Payment" clickHandler={proceedHandler} />
    </div>
  );
};

Payment.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Payment;
