import { useDispatch } from 'react-redux';
import { removeElementFromList } from '../../utils/remove-element-from-array';
import { removeToCart } from '../store/actions/cart-actions';
import { useGetCartProducts } from './get-cart-products';

export const useRemoveFromCart = () => {
  const dispatch = useDispatch();
  const getCartProducts = useGetCartProducts();

  const cartProductToItemCart = () => getCartProducts?.data.map((item) => ({ id: item.id }));

  const handleRemoveProduct = (id: number) => {
    dispatch(removeToCart(removeElementFromList(cartProductToItemCart(), id)));
  };

  return handleRemoveProduct;
};
