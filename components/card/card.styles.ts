import styled from 'styled-components';

export const CardContainer = styled.div`
  height: auto;
  position: relative;
  //z-index: 2;
  border: none;
  border-radius: 12px;

  &:hover{
    border-color: #fff;
    box-shadow: #DFE3F7 0 0 19px;

    .img{
      transform: scale(1.1);
    }

    .text {
      transform: scale(1.06);
    }
    .price {
      transform: scale(1.15);
    }

    .addToCar {
      opacity: 1
    }
  }
`;

export const Content = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background-color: #fff;
  border: 1px solid #F3F3F3;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  transition: all ease-in 0.3s;
  cursor: pointer;
`;

export const Image = styled.div`
  width: 100%;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid #F3F3F3;


  img{
    width: auto;
    max-width: 80%;
    height: 70%;

    transition: all ease-in 0.3s;
  }
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 20px;
  color: #4B537A;
  margin-right: 30px;

  height: 45px;
  overflow: hidden;
  text-overflow: ellipsis;

  transition: all ease-in 0.3s;
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 10px 20px;
  margin-bottom: 20px;
  color: #868CAA;

  transition: all ease-in 0.3s;
`;

export const AddToCarButton = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  z-index: 3;
  top: 10px;
  right: 10px;
  padding: 0;
  border: 1px solid #F3F3F3;
  background: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0;

  transition: all ease-in 0.3s;

  img{
    width: 60%;
    height: 60%;
  }
`;
