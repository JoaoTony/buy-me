import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import {
  Container,
  SelectedContainer,
  Image,
  ImageWrapper,
  Column,
  Row,
  Title,
  Price,
  Description,
  Raters,
  Category,
} from './details.styles';
import { useSwr } from '../../api/useSwr';
import { CardProps } from '../../types/card.props';
import Stars from '../../components/starts';
import { CATEGORY } from './details.utils';

const Details: FC = () => {
  const [product, setProduct] = useState<CardProps>();
  const { data } = useSwr<Array<CardProps>>('/products');
  const router = useRouter();

  useEffect(() => {
    setProduct(data?.find((item) => item.id === Number(router.query.id)));
  }, [router, data]);

  return (
    <Container>
      <SelectedContainer>
        <ImageWrapper>
          <Image src={product?.image} alt="image" />
        </ImageWrapper>
        <Column>
          {product?.category
          && <Category>{CATEGORY(product?.category)}</Category>}
          <Title>{product?.title}</Title>
          <Row>
            <Stars rate={product?.rating.rate || 0} />
            <Raters>
              {product?.rating.rate}
              {' '}
              -
              (
              {product?.rating.count}
              {' '}
              Avaliadores)
            </Raters>
          </Row>
          <Price>
            Por:
            {' '}
            <span>
              $
              {product?.price}
            </span>
          </Price>
          <Description>{product?.description}</Description>
        </Column>
      </SelectedContainer>
    </Container>
  );
};

export default Details;
