import { addressConstants } from '../_constants';

const elementConfigObject = (type, placeholder) => (
  {
    type,
    placeholder,
  }
);

const initialState = {
  orderForm: {
    firstName: {
      elementType: 'input',
      elementConfig: elementConfigObject('text', ''),
      label: 'First Name',
    },
    lastName: {
      elementType: 'input',
      elementConfig: elementConfigObject('text', ''),
      label: 'Last Name',
    },
    email: {
      elementType: 'input',
      elementConfig: elementConfigObject('email', 'name@example.com'),
      label: 'Email ID',
    },
    phone: {
      elementType: 'input',
      elementConfig: elementConfigObject('text', '10-digit mobile number'),
      label: 'Phone Number',
    },
    addressLineOne: {
      elementType: 'input',
      elementConfig: elementConfigObject('text', ''),
      label: 'Address Line 1',
    },
    addressLineTwo: {
      elementType: 'input',
      elementConfig: elementConfigObject('text', ''),
      label: 'Address Line 2',
    },
    state: {
      elementType: 'input',
      elementConfig: elementConfigObject('text', ''),
      label: 'State',
    },
    zip: {
      elementType: 'input',
      elementConfig: elementConfigObject('text', ''),
      label: 'Pin Code',
    },
  },
  userAddress: [],
};

function address(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case addressConstants.ADDADDRESS:
      return {
        ...state,
        userAddress: [...state.userAddress, action.address.data],
      };
    default:
      return state;
  }
}

export default address;
