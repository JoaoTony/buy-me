/* eslint-disable no-unused-vars */
import { CardProps } from '../types/card.props';
import { howManyTimesElementRepeat } from './how-many-times-element-repeat';

export const removeDuplicatedProducts = <T>(arr: Array<{ id: number }>) => {
  const newObjt: any = {};

  arr.forEach((item) => {
    const quantity = howManyTimesElementRepeat(arr, item?.id);
    const newObjtWithQuatinty = { ...item, quantity };
    newObjt[item?.id] = { ...newObjt[item?.id], ...newObjtWithQuatinty };
  });

  const newArr = Object.entries(newObjt);

  return newArr.map(([_id, item]) => item as T);
};
