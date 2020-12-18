import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const LoginMethod = ({ text, type, click }) => (
  <button type="button" onClick={() => click()}>
    <FontAwesomeIcon icon={type === 'Google' ? faGoogle : faFacebookF} />
    {text}
  </button>
);

LoginMethod.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};

export default LoginMethod;
