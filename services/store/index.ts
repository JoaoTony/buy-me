/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducers } from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

// const store = createStore(
//   reducers,
//   {},
//   // window?.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

// export default store;

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
