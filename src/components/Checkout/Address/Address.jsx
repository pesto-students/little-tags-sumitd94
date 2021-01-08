/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/aria-role */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import classNames from './Address.module.css';
import Button from '../../UI/Button/Button';
import { addressActions, alertActions } from '../../../_actions';

const Address = ({ history }) => {
  const { userAddress, deliveryAddress } = useSelector((state) => state.address);
  const dispatch = useDispatch();

  const proceedHandler = () => {
    if (deliveryAddress > '') {
      history.push('/checkout/payment');
    } else {
      dispatch(alertActions.error('Please Select an address to proceed'));
    }
  };

  const newAddressHandler = () => {
    history.push('/new-address');
  };

  const addressChangeHandler = (address) => {
    dispatch(addressActions.addDeliveryAddress(address));
  };

  return (
    <div className={classNames.addressLists}>
      <h2>Deliver To</h2>
      <ul>
        {
          userAddress.map((address, index) => (
            <li key={index}>
              <input type="radio" name="deliveryAddress" className={classNames.radio} onChange={() => addressChangeHandler(address)} />
              <div className={classNames.address}>
                <span className={classNames.name}>{`${address.firstName} ${address.lastName}`}</span>
                <span>{address.addressLineOne}</span>
                {address.addressLineTwo > '' && <span>{address.addressLineTwo}</span>}
                <span>{`${address.state} ${address.zip}, India`}</span>
                <span>{address.phone}</span>
              </div>
            </li>
          ))
        }
      </ul>
      <div
        className={classNames.newAddress}
        onClick={newAddressHandler}
        onKeyPress={newAddressHandler}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 52 52">
          <path d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z" />
          <path d="M38.5 25H27V14c0-.553-.448-1-1-1s-1 .447-1 1v11H13.5c-.552 0-1 .447-1 1s.448 1 1 1H25v12c0 .553.448 1 1 1s1-.447 1-1V27h11.5c.552 0 1-.447 1-1s-.448-1-1-1z" />
        </svg>

        <p>Add New Address</p>
      </div>
      <Button text="Proceed" clickHandler={proceedHandler} />
    </div>
  );
};

Address.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Address;
