import { FC } from 'react';

import CustomSwitch from '../custom-switcher';
import {
  Nav, Logo, CarBtn, Row,
} from './navbar.styles';

const NavBar: FC<{handleTheme: () => void}> = ({ handleTheme }) => (
  <Nav>
    <Logo>BUYME</Logo>
    <Row>
      <CarBtn>
        <img src="/car.png" alt="" />
      </CarBtn>
      <CustomSwitch handleTheme={handleTheme} />
    </Row>
  </Nav>
);

export default NavBar;
