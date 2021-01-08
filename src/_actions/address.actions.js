import { addressConstants } from '../_constants';

function addAddress(addressObject) {
  return (dispatch) => {
    dispatch({ type: addressConstants.ADDADDRESS, address: addressObject });
  };
}

function addDeliveryAddress(addressObject) {
  return (dispatch) => {
    dispatch({ type: addressConstants.DELIVERYADDRESS, address: addressObject });
  };
}

const addressActions = {
  addAddress,
  addDeliveryAddress,
};

export default addressActions;
