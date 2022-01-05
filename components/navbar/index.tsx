import { FC } from 'react';
import Router from 'next/router';

import CustomSwitch from '../custom-switcher';
import {
  Nav, Logo, CartBtn, Row,
} from './navbar.styles';

const hideForNow = false;

const NavBar: FC = () => (
  <Nav>
    <Logo onClick={() => Router.push('/')}>BUYME</Logo>
    <Row>
      <CartBtn onClick={() => Router.push('/cart')}>
        <img src="/car.png" alt="" />
      </CartBtn>
      {hideForNow && <CustomSwitch />}
    </Row>
  </Nav>
);

export default NavBar;
