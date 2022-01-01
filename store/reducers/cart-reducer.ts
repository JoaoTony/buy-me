/* eslint-disable default-param-last */
import { actionsType } from '../../constants/redux-actions-types';

const INITIAL_STATE: Array<{ id: number }> = [];

export const cartReducer = (state = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case actionsType.ADD_TO_CART:
      return [...state, payload];
    default:
      return state;
  }
};
