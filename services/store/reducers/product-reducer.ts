/* eslint-disable default-param-last */
import { actionsType } from '../../../constants/redux-actions-types';

const INITIAL_STATE = {
  products: [],
};

export const productReducer = (state = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case actionsType.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
