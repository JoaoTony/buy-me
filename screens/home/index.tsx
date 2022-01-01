import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import {
  Container, CardList, Content, LoaderWrapper,
} from './home.styles';
import Navbar from '../../components/navbar';
import Card from '../../components/card';
import { useSwr } from '../../api/useSwr';
import { CardProps } from '../../types/card.props';
import Details from '../details';
import Cart from '../cart';
import { addToCart } from '../../store/actions/cart-actions';
import Loader from '../../components/loarder';

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
  }, [router, data]);

  return (
    <Container>
      <Navbar handleTheme={handleTheme} />

      <Content>
        {!id && !page && loading && (
          <LoaderWrapper><Loader /></LoaderWrapper>
        )}

        {!id && !page && data && (
          <CardList>
            {data.map((item) => (
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

        {id && page === 'details' && <Details handleAddToCart={handleAddToCart} />}

        {page === 'cart' && <Cart />}

      </Content>
    </Container>
  );
};

export default Home;
