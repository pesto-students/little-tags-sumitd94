import React from 'react';
import PropTypes from 'prop-types';
import classNames from './ThankYou.module.css';
import Button from '../../UI/Button/Button';

const ThankYou = ({ history }) => {
  const proceedHandler = () => {
    history.replace('/');
  };

  return (
    <div className={classNames.thankYouContainer}>
      <h2>Thank you for shopping with us</h2>
      <Button text="Continue Shopping" clickHandler={proceedHandler} />
    </div>
  );
};

ThankYou.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func,
  }).isRequired,
};

export default ThankYou;
