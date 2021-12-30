import { FC } from 'react';
import router from 'next/router';
import {
  CardContainer,
  Image,
  Title,
  Price,
  AddToCarButton,
  Content,
} from './card.styles';
import { CardProps } from './card.types';

const Card: FC<CardProps> = ({
  image,
  name,
  price,
  id,
  handleAddToCart,
}) => (
  <CardContainer>
    <Content onClick={() => router.push(`details/${id}`)}>
      <Image>
        <img className="img" src={image} alt={image} />
      </Image>
      <Title className="text">{name}</Title>
      <Price className="price">
        $
        {price}
      </Price>
    </Content>
    <AddToCarButton className="addToCar" onClick={() => handleAddToCart(Number(id))}>
      <img src="./car.png" alt="" />
    </AddToCarButton>
  </CardContainer>
);

export default Card;
