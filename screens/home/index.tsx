import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { Container, CardList, Content } from './home.styles';
import Navbar from '../../components/navbar';
import Card from '../../components/card';
import { useSwr } from '../../api/useSwr';
import { CardProps } from '../../types/card.props';
import Details from '../details';
import Cart from '../cart';
import { addToCart } from '../../store/actions/cart-actions';

const Home: FC<{handleTheme: () => void}> = ({ handleTheme }) => {
  const { data, loading } = useSwr<Array<CardProps>>('/products');
  const [id, setId] = useState<string>();
  const [page, setPage] = useState<string>();
  const dispatch = useDispatch();

  const handleAddToCart = (productId: number) => {
    dispatch(addToCart({ id: productId }));
  };

  const router = useRouter();

  useEffect(() => {
    setId(router.query.id as string);
    setPage(router.query.page as string);
  }, [router]);

  return (
    <Container>
      <Navbar handleTheme={handleTheme} />

      <Content>
        {!id && !page && (
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
                handleAddToCart={handleAddToCart}
              />
            ))}

          </CardList>
        )}

        {id && page === 'details' && <Details />}

        {page === 'cart' && <Cart />}

      </Content>
    </Container>
  );
};

export default Home;
