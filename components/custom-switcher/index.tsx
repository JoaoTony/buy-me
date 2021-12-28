import { FC, useState } from 'react';
import Switch from 'react-switch';

import { Icons } from './cutsom-switcer.styles';

const CustomSwitch: FC<{handleTheme: () => void}> = ({ handleTheme }) => {
  const [switcher, setSwitcher] = useState(false);
  return (
    <Switch
      onChange={() => { setSwitcher(!switcher); handleTheme(); }}
      checked={switcher}
      checkedIcon={<Icons><img src="/icon-lua.png" alt="lua" /></Icons>}
      uncheckedIcon={<Icons><img src="/icon-sol.png" alt="sol" /></Icons>}
    />
  );
};

export default CustomSwitch;
