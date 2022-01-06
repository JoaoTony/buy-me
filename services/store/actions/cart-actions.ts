import { actionsType } from '../../../constants/redux-actions-types';

export const addToCart = (newProductID: {id: number}) => ({
  type: actionsType.ADD_TO_CART,
  payload: newProductID,
});

export const removeToCart = (newState: Array<any>) => ({
  type: actionsType.REMOVE_TO_CART,
  payload: newState,
});
