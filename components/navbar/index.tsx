import { FC } from 'react';
import Router from 'next/router';

import CustomSwitch from '../custom-switcher';
import {
  Nav, Logo, CartBtn, Row,
} from './navbar.styles';

const NavBar: FC<{handleTheme: () => void}> = ({ handleTheme }) => (
  <Nav>
    <Logo onClick={() => Router.push('/')}>BUYME</Logo>
    <Row>
      <CartBtn onClick={() => Router.push('/cart')}>
        <img src="/car.png" alt="" />
      </CartBtn>
      <CustomSwitch handleTheme={handleTheme} />
    </Row>
  </Nav>
);

export default NavBar;
