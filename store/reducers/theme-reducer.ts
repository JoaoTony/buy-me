import { actionsType } from '../../constants/redux-actions-types';

import { LIGHT } from '../../styles/themes/light';

export const themeReducer = (state = LIGHT, { type, payload }) => {
  switch (type) {
    case actionsType.CANGE_THEME:
      return state;
    default:
      return state;
  }
};
