import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({ show, modalClosed, children }) => (
  <>
    <Backdrop show={show} clicked={modalClosed} />
    <div
      className={classes.Modal}
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0',
      }}
    >
      <span className={classes.crossIcon}>
        <FontAwesomeIcon icon={faTimes} onClick={modalClosed} />
      </span>
      {children}
    </div>
  </>
);

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  modalClosed: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
