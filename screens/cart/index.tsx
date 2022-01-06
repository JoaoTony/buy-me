/* eslint-disable no-unused-vars */
import { FC, useEffect, useState } from 'react';

import { Container, Title, TotalPrice } from './cart.styles';
import CartItem from './cart.item';
import { CardProps } from '../../types/card.props';
import { totalPrice as getTotalPrice, removeDuplicatedProducts } from './cart.utils';
import { useGetCartProducts } from '../../services/product/get-cart-products';
import { ItemCartWithQuantity } from './cart.types';

const Cart: FC = () => {
  const [cartData, setCartData] = useState<Array<CardProps>>();
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const getCartProducts = useGetCartProducts();

  useEffect(() => {
    setCartData(getCartProducts.data);
    setTotalPrice(getTotalPrice(getCartProducts.data?.map((item) => item?.price)));
  }, [getCartProducts.loading]);

  return (
    <Container>
      <Title>Carrinho de Comporas</Title>

      {!getCartProducts.loading
      && cartData
      && removeDuplicatedProducts<ItemCartWithQuantity>(cartData)
      && removeDuplicatedProducts<ItemCartWithQuantity>(cartData).map((item) => (
        <CartItem
          key={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          description={item.description}
          rating={item.rating}
          category={item.category}
          quantity={item.quantity}
        />
      ))}

      <TotalPrice>
        Preço total:
        {' $'}
        {totalPrice.toFixed(2)}
      </TotalPrice>

    </Container>
  );
};

export default Cart;
