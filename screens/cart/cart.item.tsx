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

import { ItemCartProps } from './cart.types';

const CartItem: FC<ItemCartProps> = ({
  image,
  title,
  price,
  description,
  rating,
  category,
}) => (
  <Container>
    <ItemImage>
      <img src={image} alt="aa" />
    </ItemImage>
    <Column>
      <ItemTitle>{title}</ItemTitle>
      <Category>{CATEGORY(category)}</Category>
      <Row>
        <Stars rate={rating.rate} />
        <Raters>
          {rating.rate}
          {' '}
          -
          (
          {rating.count}
          {' '}
          Avaliadores)
        </Raters>
      </Row>
      <Description>{description}</Description>
    </Column>

    <Price>
      $
      {price}
    </Price>
  </Container>
);

export default CartItem;
