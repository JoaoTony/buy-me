import { FC } from 'react';
import { wicthStar } from './stars.utls';

import { StarsProps } from './stars.types';
import { Container, Star } from './stars.styles';

const Stars: FC<StarsProps> = ({ rate, size }) => (
  <Container size={size}>
    {[0, 1, 2, 3, 4].map((item, index) => (
      <Star
        key={item}
        size={size}
        src={wicthStar(rate, index)}
      />
    ))}
  </Container>
);

export default Stars;
