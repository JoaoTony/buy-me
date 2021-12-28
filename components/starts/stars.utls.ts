export const wicthStar = (rate: number, index: number) => {
  if ((index + 1) - Math.trunc(rate) === 1 && rate % 1 >= 0.5) {
    return '/half-star.png';
  }
  return index + 1 <= rate ? '/full-star.png' : '/empty-star.png';
};
