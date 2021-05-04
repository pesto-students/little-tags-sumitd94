import { ADDRESS_CONSTANTS } from '../../AppConstants';

function addAddress(addressObject) {
  return (dispatch) => {
    dispatch({ type: ADDRESS_CONSTANTS.ADDADDRESS, address: addressObject });
  };
}

function addDeliveryAddress(addressObject) {
  return (dispatch) => {
    dispatch({ type: ADDRESS_CONSTANTS.DELIVERYADDRESS, address: addressObject });
  };
}

const addressActions = {
  addAddress,
  addDeliveryAddress,
};

export default addressActions;
