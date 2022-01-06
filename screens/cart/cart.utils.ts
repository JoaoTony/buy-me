export const totalPrice = (
  arr: Array<number>,
) => (arr && arr[0] ? arr.reduce((acc, item) => acc + item) : 0);

export const removeDuplicatedProducts = (arr: Array<any>) => {
  const newObjt: any = {};

  arr.forEach((item) => {
    newObjt[item?.id] = { ...newObjt[item?.id], ...item };
  });

  const newArr = Object.entries(newObjt);

  return newArr;
};
