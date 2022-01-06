export const howManyTimesElementRepeat = (arr: Array<{ id: number }>, id: number) => {
  const howMany = arr.filter((element) => element?.id === id);
  return howMany.length;
};
