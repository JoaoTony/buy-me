import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cart-actions';

export const useAddProductToCart = (id: number) => {
  const dispatch = useDispatch();

  const handleDispatch = () => {
    dispatch(addToCart({ id }));
  };

  return handleDispatch;
};
