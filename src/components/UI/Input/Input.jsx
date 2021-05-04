/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import messages from '../../../store/Helpers/ValidateMessage';
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

  if (formKey === 'state') {
    inputElement = (
      <select
        id="state"
        ref={refValue}
        name={formKey}
        className={classNames.InputElement}
      >
        <option value="" />
        <option value="Andhra Pradesh">Andhra Pradesh</option>
        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
        <option value="Assam">Assam</option>
        <option value="Bihar">Bihar</option>
        <option value="Chandigarh">Chandigarh</option>
        <option value="Chhattisgarh">Chhattisgarh</option>
        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
        <option value="Daman and Diu">Daman and Diu</option>
        <option value="Delhi">Delhi</option>
        <option value="Lakshadweep">Lakshadweep</option>
        <option value="Puducherry">Puducherry</option>
        <option value="Goa">Goa</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Haryana">Haryana</option>
        <option value="Himachal Pradesh">Himachal Pradesh</option>
        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
        <option value="Jharkhand">Jharkhand</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Kerala">Kerala</option>
        <option value="Madhya Pradesh">Madhya Pradesh</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Manipur">Manipur</option>
        <option value="Meghalaya">Meghalaya</option>
        <option value="Mizoram">Mizoram</option>
        <option value="Nagaland">Nagaland</option>
        <option value="Odisha">Odisha</option>
        <option value="Punjab">Punjab</option>
        <option value="Rajasthan">Rajasthan</option>
        <option value="Sikkim">Sikkim</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
        <option value="Telangana">Telangana</option>
        <option value="Tripura">Tripura</option>
        <option value="Uttar Pradesh">Uttar Pradesh</option>
        <option value="Uttarakhand">Uttarakhand</option>
        <option value="West Bengal">West Bengal</option>
      </select>
    );
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
