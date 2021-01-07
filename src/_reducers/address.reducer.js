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
      validation: {
        required: true,
      },
    },
    lastName: {
      elementType: 'input',
      elementConfig: elementConfigObject('text', ''),
      label: 'Last Name',
      validation: {
        required: true,
      },
    },
    email: {
      elementType: 'input',
      elementConfig: elementConfigObject('email', 'name@example.com'),
      label: 'Email ID',
      validation: {
        required: true,
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        },
      },
    },
    phone: {
      elementType: 'input',
      elementConfig: elementConfigObject('text', '10-digit mobile number'),
      label: 'Phone Number',
      validation: {
        required: true,
        minLength: 10,
        maxLength: 10,
        pattern: {
          value: /^[0-9\b]+$/,
        },
      },
    },
    addressLineOne: {
      elementType: 'input',
      elementConfig: elementConfigObject('text', ''),
      label: 'Address Line 1',
      validation: {
        required: true,
      },
    },
    addressLineTwo: {
      elementType: 'input',
      elementConfig: elementConfigObject('text', ''),
      label: 'Address Line 2',
      validation: {
        required: false,
      },
    },
    state: {
      elementType: 'input',
      elementConfig: elementConfigObject('text', ''),
      label: 'State',
      validation: {
        required: true,
      },
    },
    zip: {
      elementType: 'input',
      elementConfig: elementConfigObject('text', ''),
      label: 'Pin Code',
      validation: {
        required: true,
      },
    },
  },
  userAddress: [],
  deliveryAddress: {},
};

function address(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case addressConstants.ADDADDRESS:
      return {
        ...state,
        userAddress: [...state.userAddress, action.address.data],
      };
    case addressConstants.DELIVERYADDRESS:
      return {
        ...state,
        deliveryAddress: action.address,
      };
    default:
      return state;
  }
}

export default address;
