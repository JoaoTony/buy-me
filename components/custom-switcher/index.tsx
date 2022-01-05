import { FC, useState, useCallback } from 'react';
import Switch from 'react-switch';
import { DefaultTheme } from 'styled-components';
import { DARK } from '../../styles/themes/dark';
import { LIGHT } from '../../styles/themes/light';
import { usePersistedState } from '../../utils/usePersistedState';
import { Icons } from './cutsom-switcer.styles';

const CustomSwitch: FC = () => {
  const [switcher, setSwitcher] = useState(false);
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', LIGHT);

  const handleTheme = useCallback(() => {
    if (theme.type === 'light') {
      setTheme(DARK);
    } else setTheme(LIGHT);
  }, [theme]);

  return (
    <Switch
      onChange={() => { setSwitcher(!switcher); handleTheme(); console.log(theme); }}
      checked={theme.type === 'dark'}
      checkedIcon={<Icons><img src="/icon-lua.png" alt="lua" /></Icons>}
      uncheckedIcon={<Icons><img src="/icon-sol.png" alt="sol" /></Icons>}
    />
  );
};

export default CustomSwitch;
