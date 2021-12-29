import { combineReducers } from 'redux';

import { productReducer } from './product-reducer';
import { cartReducer } from './cart-reducer';

const reducers = combineReducers({
  allProducts: productReducer,
  cart: cartReducer,
});

export { reducers };
