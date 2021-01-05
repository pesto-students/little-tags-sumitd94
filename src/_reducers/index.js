import { combineReducers } from 'redux';
import authentication from './user.reducer';
import alert from './alert.reducerts';
import products from './products.reducers';
import cart from './cart.reducers';
import order from './order.reducer';
import address from './address.reducer';

const rootReducer = combineReducers({
  authentication,
  alert,
  products,
  cart,
  order,
  address,
});

export default rootReducer;
