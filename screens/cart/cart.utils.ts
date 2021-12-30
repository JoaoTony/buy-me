import { GenericObject } from '../../types/generic-object-type';

export const totalPrice = (
  arr: Array<GenericObject>,
) => (arr && arr[0] ? arr.reduce((acc, item) => {
  acc.price += item.price;
  return acc.price;
}) : 0);
