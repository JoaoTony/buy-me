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
import { useAddProductToCart } from '../../services/product/add-to-cart';

const Card: FC<CardProps> = ({
  image,
  name,
  price,
  id,
}) => {
  const addProductToCart = useAddProductToCart(Number(id));

  return (
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
      <AddToCarButton className="addToCar" onClick={() => addProductToCart()}>
        <img src="./car.png" alt="" />
      </AddToCarButton>
    </CardContainer>
  );
};

export default Card;
