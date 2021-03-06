import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 16%;
  padding-top: 200px;
`;

export const SelectedContainer = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid #F3F3F3;
  border-radius: 12px;
  position: relative;
`;

export const ImageWrapper = styled.div`
  width: 550px;
  height: 600px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  border-right: 1px solid #F3F3F3;
`;

export const Image = styled.img`
  width: auto;
  max-width: 80%;
  height: 65%;

`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin: 10px 0;
  color: #4B537A;
  margin-right: 30px;
`;

export const Price = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 10px 0;
  margin-bottom: 20px;
  color: #868CAA;

  span{
    color: #FF8095;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 10px 0;
  margin-bottom: 20px;
  color: #868CAA;

  transition: all ease-in 0.3s;
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
  margin: 0;
  color: #D2D7DA ;
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 60px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const AddToCarButton = styled.button`
  width: 200px;
  height: 45px;
  background: #D570E9;
  border: none;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: #fff;
  align-self: baseline;

  position: absolute;
  bottom: 60px;

  cursor: pointer;

  transition: all ease-in 0.2s;

  :hover{
    opacity: 0.8;
  }
`;
