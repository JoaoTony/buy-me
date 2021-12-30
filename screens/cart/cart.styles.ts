import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: #4B537A;

 margin: 0;
 margin-bottom: 20px;
`;

export const ItemOnCart = styled.div`
  width: 100%;
  height: 250px;

  display: flex;
  position: relative;

  border-top: 1px solid #F3F3F3;
  border-bottom: 1px solid #F3F3F3;
`;

export const ItemImage = styled.div`
  width: 200px;
  height: 100%;

  background: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
    height: auto;
    max-height: 80%;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #4B537A;

  margin: 20px;
  margin-bottom: 0;

`;
export const Price = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 20px;
  right: 20px;
  color: #868CAA;

  position: absolute;
`;

export const Description = styled.p`
  font-size: 16px;
  max-width: 300px;
  font-weight: 500;
  margin: 10px;
  margin-left: 20px;
  color: #868CAA;
`;

export const Raters = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  margin-left: 10px;
  color: #868CAA;
`;

export const Category = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 10px 20px;
  margin-left: 20px;
  color: #D2D7DA ;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

export const TotalPrice = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 20px;
  right: 20px;
  color: #868CAA;

  align-self: flex-end;

`;
