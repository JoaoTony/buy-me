import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { useSelector } from 'react-redux';
import { Container, CardList, Content } from './home.styles';
import Navbar from '../../components/navbar';
import Card from '../../components/card';
import { IState } from './home.types';
import { useSwr } from '../../api/useSwr';
import { cardProps } from '../../types/card.props';
import Details from '../details';

const Home: FC<{handleTheme: () => void}> = ({ handleTheme }) => {
  const { allProducts } = useSelector((state: IState) => state);
  const { data, loading } = useSwr<Array<cardProps>>('/products');
  const [id, setId] = useState<string>();

  const router = useRouter();

  useEffect(() => {
    setId(router.query.id as string);
  }, [router]);

  return (
    <Container>
      <Navbar handleTheme={handleTheme} />

      <Content>

        {!id ? (
          <CardList>
            {loading ? (
              <div>carregando...</div>
            ) : data.map((item) => (
              <Card
                key={item.id}
                id={item.id.toString()}
                image={item.image}
                name={item.title}
                price={item.price.toString()}
              />
            ))}

          </CardList>
        )
          : <Details />}
      </Content>
    </Container>
  );
};

export default Home;
