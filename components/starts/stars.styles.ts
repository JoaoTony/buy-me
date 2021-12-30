import styled from 'styled-components';
import { StarsProps } from './stars.types';

interface Size extends Omit<StarsProps, 'rate'> {}

export const Container = styled.div<Size>`
  display: flex;
  align-items: center;
  width: ${({ size }) => `calc(${size}px * 5)`};
`;

export const Star = styled.img<Size>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  margin-top: -2px;
`;
