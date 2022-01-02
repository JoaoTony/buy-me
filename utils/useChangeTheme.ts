import { DefaultTheme } from 'styled-components';
import { DARK } from '../styles/themes/dark';
import { LIGHT } from '../styles/themes/light';
import { usePersistedState } from './usePersistedState';

export const useChangeTheme = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', LIGHT);

  if (theme.type === 'light') {
    setTheme(DARK);
  } else setTheme(LIGHT);
};
