import { combineReducers } from 'redux';
import productReducer from './products';

const reducers = combineReducers({
  products: productReducer
});

export default reducers;
