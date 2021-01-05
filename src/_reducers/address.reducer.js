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
      elementConfig: elementConfigObject('text', 'Your First Name'),
      label: 'First Name',
    },
    lastName: {
      elementType: 'input',
      elementConfig: elementConfigObject('text', 'Your Last Name'),
      label: 'Last Name',
    },
    email: {
      elementType: 'input',
      elementConfig: elementConfigObject('email', 'Your Email'),
      label: 'Email ID',
    },
    phone: {
      elementType: 'input',
      elementConfig: elementConfigObject('text', 'Your Phone Number'),
      label: 'Phone Number',
    },
    addressLineOne: {
      elementType: 'input',
      elementConfig: elementConfigObject('text', 'Address line 1'),
      label: 'Address Line 1',
    },
    addressLineTwo: {
      elementType: 'input',
      elementConfig: elementConfigObject('text', 'Address line 2'),
      label: 'Address Line 2',
    },
    state: {
      elementType: 'input',
      elementConfig: elementConfigObject('text', 'Select state'),
      label: 'State',
    },
    zip: {
      elementType: 'input',
      elementConfig: elementConfigObject('text', 'Pin Code'),
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
