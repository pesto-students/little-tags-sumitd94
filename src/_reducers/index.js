import { combineReducers } from 'redux';

import authentication from './authentication.reducer';
import alert from './alert.reducerts';
import products from './products.reducers';
import cart from './cart.reducers';

const rootReducer = combineReducers({
  authentication,
  alert,
  products,
  cart,
});

export default rootReducer;
