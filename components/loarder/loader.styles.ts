import styled, { keyframes } from 'styled-components';

const animate = keyframes`
   from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  width: 50px;
  height: 50px;

  border-radius: 50%;
  border: 4px;
  border-top: solid #5D6D7E ;
  border-left: solid transparent;
  border-bottom: solid #5D6D7E ;
  border-right: solid transparent;

  background-color: transparent;

  animation: ${animate} 0.4s infinite;
`;
