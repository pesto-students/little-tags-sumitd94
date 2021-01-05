/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from './Input.module.css';

const Input = ({
  elementType, elementConfig, label, changed,
}) => {
  let inputElement = null;

  switch (elementType) {
    case ('input'):
      inputElement = (
        <input
          className={classNames.InputElement}
          {...elementConfig}
          onChange={changed}
        />
      );
      break;
    case ('textarea'):
      inputElement = (
        <textarea
          className={classNames.InputElement}
          {...elementConfig}
          onChange={changed}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className={classNames.InputElement}
          {...elementConfig}
          onChange={changed}
        />
      );
      break;
  }

  return (
    <div className={classNames.Input}>
      <label htmlFor={label} className={classNames.Label}>{label}</label>
      {inputElement}
    </div>
  );
};

Input.propTypes = {
  elementType: PropTypes.string.isRequired,
  elementConfig: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired,
};

export default Input;
