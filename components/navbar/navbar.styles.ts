import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.navbar};
  position: absolute;
  z-index: 2000;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16%;

  transition: all ease-in 0.3s;
`;

export const Logo = styled.button`
  color: ${({ theme }) => theme.colors.logo};
  font-size: 30px;
  font-weight: 900;
  transition: all ease-in 0.3s;
  cursor: pointer;
  border: none;
  background: transparent;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const CartBtn = styled.button`
  padding: 0;
  width: 30px;
  height: 30px;
  border: none;
  background: transparent;
  margin-right: 10px;
  position: relative;

  cursor: pointer;

  .floating {
    width: 16px;
    height: 16px;
    right: -5px;
    top: -5px;

    color: #fff;
    font-size: 10px;

    border-radius: 50%;
    position: absolute;
    z-index: 2;

    background: red;
    padding: 2px;
  }

  img{
    width: 100%;
    height: 100%;
  }
`;
