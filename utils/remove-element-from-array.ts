export const removeElementFromList = (arr: any[], elementId: any) => {
  const elementIndex = arr.findIndex((item) => item.id === elementId);
  return arr.splice(elementIndex, 1);
};
