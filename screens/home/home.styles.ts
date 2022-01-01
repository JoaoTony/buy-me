import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 200px 16%;
  padding-bottom: 100px;
`;

export const CardList = styled.div`
  width: 100%;


  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
`;

export const LoaderWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 400px);
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
