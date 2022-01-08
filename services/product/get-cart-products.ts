import { useSelector } from 'react-redux';
import { CardProps } from '../../types/card.props';
import { useSwr } from '../remote/useSwr';

export const useGetCartProducts = () => {
  const { cart } = useSelector((state: {cart: Array<{ id: number }>}) => state);
  const { data, loading } = useSwr<Array<CardProps>>('/products');

  const filterData = () => {
    const arr: Array<CardProps> = [];
    cart.forEach((item) => {
      arr.push(data?.find((el) => el.id === item.id) as CardProps);
    });
    return arr;
  };

  return { data: filterData(), loading, cart };
};
