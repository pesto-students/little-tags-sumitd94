import { combineReducers } from 'redux';

import products from './Products/Reducer';
import authentication from './User/Reducer';
import alert from './Alerts/Reducer';
import cart from './Cart/Reducer';
import order from './Orders/Reducer';
import address from './Address/Reducer';

const rootReducer = combineReducers({
  products,
  authentication,
  alert,
  cart,
  order,
  address,
});

export default rootReducer;
