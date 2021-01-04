import React from 'react';
import PropTypes from 'prop-types';
import classNames from './Payment.module.css';
import Button from '../../UI/Button/Button';

const Payment = ({ history }) => {
  const proceedHandler = () => {
    history.push('/thank-you');
  };

  return (
    <div className={classNames.paymentContainer}>
      <h2>Delivering To</h2>
      <div className={classNames.addressSection}>
        <span>Sumit Dhanania</span>
        <span>
          1418 Riverwood Drive,
          Suite 3245 Cottonwood,
          DL 110092, India
        </span>
      </div>
      <div className={classNames.paymentMethods}>
        <h2>Method Of Payment</h2>
        <ul className={classNames.paymentMethodLists}>
          <li>
            <input type="radio" name="payment-method" />
            <span>Razor Pay</span>
          </li>
          <li>
            <input type="radio" name="payment-method" />
            <span>Visa / MasterCard / UPI</span>
          </li>
          <li>
            <input type="radio" name="payment-method" />
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
