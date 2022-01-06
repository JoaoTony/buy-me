import { FC } from 'react';
import Router from 'next/router';

import { useGetCartQuantity } from '../../services/product/get-cart-quantity';

import CustomSwitch from '../custom-switcher';
import {
  Nav,
  Logo,
  CartBtn,
  Row,
} from './navbar.styles';

const hideForNow = false;

const NavBar: FC = () => {
  const getCartQuantity = useGetCartQuantity();

  console.log(getCartQuantity);

  return (
    <Nav>
      <Logo onClick={() => Router.push('/')}>BUYME</Logo>
      <Row>
        <CartBtn onClick={() => Router.push('/cart')}>
          <div className="floating">{getCartQuantity}</div>
          <img src="/car.png" alt="" />
        </CartBtn>
        {hideForNow && <CustomSwitch />}
      </Row>
    </Nav>
  );
};

export default NavBar;
