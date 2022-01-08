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
  RemoveItemBtn,
} from './cart.styles';
import { CATEGORY } from '../../utils/translete-categories';
import { ItemCartWithQuantity } from './cart.types';
import { useRemoveFromCart } from '../../services/product/remove-from-cart';

const CartItem: FC<ItemCartWithQuantity> = ({
  image,
  title,
  price,
  description,
  rating,
  category,
  quantity,
  id,
}) => {
  const removeFromCart = useRemoveFromCart();

  const handleRemoveProduct = () => {
    removeFromCart(id);
  };

  return (
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

      <RemoveItemBtn onClick={() => handleRemoveProduct()}>Remove</RemoveItemBtn>
    </Container>
  );
};

export default CartItem;
