import reducer from './reducer';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, composeEnhancers(applyMiddleware(
  reduxThunk,
  reduxPromise
)));