import { useSwr } from './useSwr';
import { CardProps } from '../../types/card.props';

export const useGetProducDetails = (id: number) => {
  const { data } = useSwr<Array<CardProps>>('/products');

  return data?.find((item) => item.id === id);
};
