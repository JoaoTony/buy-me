import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { removeDuplicatedProducts } from '../../utils/remove-duplicated-products';

export const useGetCartQuantity = () => {
  const [quantity, setQuantity] = useState(0);
  const { cart } = useSelector((state: {cart: Array<{ id: number }>}) => state);
  console.log(cart.length);

  useEffect(() => {
    setQuantity(removeDuplicatedProducts(cart).length);
  }, [cart]);

  return quantity;
};
