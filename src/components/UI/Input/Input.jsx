/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from './Input.module.css';

const Input = ({
  elementType, elementConfig, label, refValue, formKey,
}) => {
  let inputElement = null;

  switch (elementType) {
    case ('input'):
      inputElement = (
        <input
          className={classNames.InputElement}
          {...elementConfig}
          ref={refValue}
          name={formKey}
        />
      );
      break;
    case ('textarea'):
      inputElement = (
        <textarea
          className={classNames.InputElement}
          {...elementConfig}
          ref={refValue}
          name={formKey}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className={classNames.InputElement}
          {...elementConfig}
          ref={refValue}
          name={formKey}
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
  refValue: PropTypes.func.isRequired,
  formKey: PropTypes.string.isRequired,
};

export default Input;
