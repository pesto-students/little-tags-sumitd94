import React from 'react';
import classNames from './ThankYou.module.css';
import Button from '../../UI/Button/Button';

const ThankYou = () => (
  <div className={classNames.thankYouContainer}>
    <h2>Thank you for shopping with us</h2>
    <Button text="Continue Shopping" clickHandler={() => {}} />
  </div>
);

export default ThankYou;
