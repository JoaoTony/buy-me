/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import { reducers } from './reducers';
import {} from 'redux-persist';

const store = createStore(
  reducers,
  {},
  // window?.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
