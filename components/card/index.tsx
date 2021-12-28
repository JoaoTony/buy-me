import { FC } from 'react';
import router from 'next/router';
import {
  CardContainer,
  Image,
  Title,
  Price,
  AddToCarButton,
} from './card.styles';
import { CardProps } from './card.types';

const Card: FC<CardProps> = ({
  image, name, price, id,
}) => (
  <CardContainer onClick={() => router.push(`details/${id}`)}>
    <Image>
      <img className="img" src={image} alt={image} />
    </Image>
    <Title className="text">{name}</Title>
    <Price className="text">
      $
      {price}
    </Price>
    <AddToCarButton className="addToCar" onClick={() => {}}>
      <img src="./car.png" alt="" />
    </AddToCarButton>
  </CardContainer>
);

export default Card;
