import React from 'react';
import PropTypes from 'prop-types';
import classNames from './Button.module.css';

const Button = ({ text, clickHandler }) => (
  <button type="button" className={classNames.littleTagButton} onClick={clickHandler}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
