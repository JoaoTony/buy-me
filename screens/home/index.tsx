import { FC } from 'react';

import {
  Container, CardList, Content, LoaderWrapper,
} from './home.styles';
import Card from '../../components/card';
import { useSwr } from '../../services/remote/useSwr';
import { CardProps } from '../../types/card.props';
import Loader from '../../components/loarder';

const Home: FC = () => {
  const { data, loading } = useSwr<Array<CardProps>>('/products');

  return (
    <Container>
      <Content>
        {loading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
        )}

        {data && (
        <CardList>
          {data.map((item) => (
            <Card
              key={item.id}
              id={item.id.toString()}
              image={item.image}
              name={item.title}
              price={item.price.toString()}
            />
          ))}
        </CardList>
        )}

      </Content>
    </Container>
  );
};

export default Home;
