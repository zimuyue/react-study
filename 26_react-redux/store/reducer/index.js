import { combineReducers } from 'redux';
import product from './product';
import status from './status';

export default combineReducers({
  product,
  status
});