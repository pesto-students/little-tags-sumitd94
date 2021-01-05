import { addressConstants } from '../_constants';

function addAddress(addressObject) {
  return (dispatch) => {
    dispatch({ type: addressConstants.ADDADDRESS, address: addressObject });
  };
}

const addressActions = {
  addAddress,
};

export default addressActions;
