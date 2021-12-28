/* eslint-disable default-param-last */
import { actionsType } from '../../constants/redux-actions-types';

const INITIAL_STATE = {
  products: [{
    id: 1,
    image: '02.jpg',
    name: 'Nike Airforce one',
    price: '75.000',
  }],
};

export const productReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionsType.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
