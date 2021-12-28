import { combineReducers } from 'redux';

import { productReducer } from './product-reducer';
import { themeReducer } from './theme-reducer';

const reducers = combineReducers({
  allProducts: productReducer,
  theme: themeReducer,
});

export { reducers };
