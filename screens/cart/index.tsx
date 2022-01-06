import { FC, useEffect, useState } from 'react';

import { Container, Title, TotalPrice } from './cart.styles';
import CartItem from './cart.item';
import { CardProps } from '../../types/card.props';
import { totalPrice, removeDuplicatedProducts } from './cart.utils';
import { useGetCartProducts } from '../../services/product/get-cart-products';

const Cart: FC = () => {
  const [cartData, setCartData] = useState<Array<CardProps>>();

  const getCartProducts = useGetCartProducts();

  console.log(getCartProducts.data);
  console.log(removeDuplicatedProducts(getCartProducts.data));

  useEffect(() => {
    setCartData(getCartProducts.data);
  }, [getCartProducts.loading]);

  return (
    <Container>
      <Title>Carrinho de Comporas</Title>

      {!getCartProducts.loading && cartData && cartData[0]?.id && cartData?.map((item) => (
        <CartItem
          key={item?.id}
          image={item.image}
          title={item.title}
          price={item.price}
          description={item.description}
          rating={item.rating}
          category={item.category}
        />
      ))}

      <TotalPrice>
        Preço total:
        {' $'}
        {cartData && cartData[0]
          ? totalPrice(cartData?.map((item) => item.price)) : 0}
      </TotalPrice>

    </Container>
  );
};

export default Cart;
