import { FC } from 'react';
import { wicthStar } from './stars.utls';

import { Container, Star } from './stars.styles';

const Stars: FC<{ rate: number}> = ({ rate }) => (
  <Container>
    {[0, 1, 2, 3, 4].map((item, index) => <Star key={item} src={wicthStar(rate, index)} />)}
  </Container>
);

export default Stars;
