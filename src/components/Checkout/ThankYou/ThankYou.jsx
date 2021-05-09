import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import classNames from './ThankYou.module.css';
import Button from '../../UI/Button/Button';

const ThankYou = ({ history }) => {
  const proceedHandler = () => {
    history.replace('/');
  };

  return (
    <div className={classNames.thankYouContainer}>
      <FontAwesomeIcon icon={faSmile} />
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
