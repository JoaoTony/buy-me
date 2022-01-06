import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { removeElementFromList } from '../../utils/remove-element-from-array';
import { ItemCartWithQuantity } from './cart.types';
import { removeToCart } from '../../services/store/actions/cart-actions';

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
  // const { cart } = useSelector((state: {cart: Array<{ id: number }>}) => state);
  // const dispatch = useDispatch();

  const handleRemoveProduct = () => {
    // dispatch(removeToCart(removeElementFromList(a, id)));
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
