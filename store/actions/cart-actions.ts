import { actionsType } from '../../constants/redux-actions-types';

export const addToCart = (theme: any) => ({
  type: actionsType.ADD_TO_CART,
  payload: theme,
});
