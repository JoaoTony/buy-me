/* eslint-disable no-unused-vars */
import { CardProps } from '../../types/card.props';

export const totalPrice = (
  arr: Array<number>,
) => (arr && arr[0] ? arr.reduce((acc, item) => acc + item) : 0);

export const howManyTimesElementRepeat = (arr: Array<CardProps>, id: number) => {
  const howMany = arr.filter((element) => element?.id === id);
  return howMany.length;
};

export const removeDuplicatedProducts = <T>(arr: Array<CardProps>) => {
  const newObjt: any = {};

  arr.forEach((item) => {
    const quantity = howManyTimesElementRepeat(arr, item?.id);
    const newObjtWithQuatinty = { ...item, quantity };
    newObjt[item?.id] = { ...newObjt[item?.id], ...newObjtWithQuatinty };
  });

  const newArr = Object.entries(newObjt);

  return newArr.map(([_id, item]) => item as T);
};
