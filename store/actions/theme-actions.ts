import { actionsType } from '../../constants/redux-actions-types';

export const changeTheme = (theme: any) => ({
  type: actionsType.CANGE_THEME,
  payload: theme,
});
