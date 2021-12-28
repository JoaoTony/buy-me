import { actionsType } from '../../constants/redux-actions-types';

export const setProducts = (products: any) => ({
  type: actionsType.SET_PRODUCTS,
  payload: products,
});

export const selectedProduct = (product: any) => ({
  type: actionsType.SELECTED_PRODUCT,
  payload: product,
});
