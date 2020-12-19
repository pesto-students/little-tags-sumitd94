import { combineReducers } from 'redux';

import authentication from './authentication.reducer';
import alert from './alert.reducerts';
import products from './products.reducers';

const rootReducer = combineReducers({
  authentication,
  alert,
  products,
});

export default rootReducer;
