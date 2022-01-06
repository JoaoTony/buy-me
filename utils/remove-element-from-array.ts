export const removeElementFromList = (arr: any[], elementId: any) => {
  const newArr = arr;
  const elementIndex = arr?.findIndex((item) => item?.id === elementId);
  newArr?.splice(elementIndex, 1);

  return newArr;
};
