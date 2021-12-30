import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Container, Title, TotalPrice } from './cart.styles';
import CartItem from './cart.item';
import { useSwr } from '../../api/useSwr';
import { CardProps } from '../../types/card.props';
import { totalPrice } from './cart.utils';

const Cart: FC = () => {
  const { cart } = useSelector((state: {cart: Array<{ id: number }>}) => state);
  const { data, loading } = useSwr<Array<CardProps>>('/products');
  const [cartData, setCartData] = useState<Array<CardProps>>();

  useEffect(() => {
    const filterData = () => {
      const arr: Array<CardProps> = [];
      cart.forEach((item) => {
        arr.push(data?.find((el) => el.id === item.id) as CardProps);
        setCartData(arr);
      });
    };

    filterData();
  }, [data]);

  return (
    <Container>
      <Title>Carrinho de Comporas</Title>

      {!loading && cartData && cartData[0]?.id && cartData?.map((item) => (
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
