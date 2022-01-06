export const totalPrice = (
  arr: Array<number>,
) => (arr && arr[0] ? arr.reduce((acc, item) => acc + item) : 0);
