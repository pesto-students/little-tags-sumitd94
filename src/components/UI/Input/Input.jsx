/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import messages from '../../../_helpers/validationMessages';
import classNames from './Input.module.css';

const Input = ({
  elementType, elementConfig, label, refValue, formKey, required, validationErrors,
}) => {
  let inputElement = null;

  console.log(validationErrors);

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

  const labelClass = [classNames.Label];
  if (required) {
    labelClass.push(classNames.required);
  }

  return (
    <div className={classNames.Input}>
      <label htmlFor={label} className={labelClass.join(' ')}>{label}</label>
      {inputElement}
      <div className={classNames.Label}>
        {validationErrors[formKey] && <span>{messages[formKey]}</span>}
      </div>
    </div>
  );
};

Input.propTypes = {
  elementType: PropTypes.string.isRequired,
  elementConfig: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  refValue: PropTypes.func.isRequired,
  formKey: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  validationErrors: PropTypes.object.isRequired,
};

export default Input;
