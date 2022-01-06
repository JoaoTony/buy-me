import { FC } from 'react';

import Stars from '../../components/starts';
import {
  ItemOnCart as Container,
  ItemImage,
  Column,
  ItemTitle,
  Price,
  Description,
  Row,
  Raters,
  Category,
} from './cart.styles';
import { CATEGORY } from '../../utils/translete-categories';

import { ItemCartWithQuantity } from './cart.types';

const CartItem: FC<Omit<ItemCartWithQuantity, 'id'>> = ({
  image,
  title,
  price,
  description,
  rating,
  category,
  quantity,
}) => (
  <Container>
    <ItemImage>
      <img src={image} alt="aa" />
    </ItemImage>
    <Column>
      <ItemTitle>{title}</ItemTitle>
      <Category>{CATEGORY(category)}</Category>
      <Row>
        <Stars rate={rating?.rate} size={20} />
        <Raters>
          {rating?.rate}
          {' '}
          -
          (
          {rating?.count}
          {' '}
          Avaliadores)
        </Raters>
      </Row>
      <Description>{description}</Description>
    </Column>

    <Price>
      $
      {price}
      {' '}
      (x
      {quantity}
      )
    </Price>
  </Container>
);

export default CartItem;
