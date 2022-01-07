/* eslint-disable no-unused-vars */
import { FC, useState, useEffect } from 'react';

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
  AddToCarButton,
} from './details.styles';
import { CardProps } from '../../types/card.props';
import Stars from '../../components/starts';
import { CATEGORY } from '../../utils/translete-categories';
import { useGetProducDetails } from '../../services/remote/get-product-details';
import { useAddProductToCart } from '../../services/product/add-to-cart';

const Details: FC<{ id: number}> = ({ id }) => {
  const [product, setProduct] = useState<CardProps>();
  const getPropduct = useGetProducDetails(id);
  const addProductToCart = useAddProductToCart(id);

  useEffect(() => {
    setProduct(getPropduct);
  }, [getPropduct]);

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
            <Stars size={22} rate={product?.rating.rate || 0} />
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

          <AddToCarButton onClick={() => addProductToCart()}>
            Adicionar ao carrinho
          </AddToCarButton>
        </Column>
      </SelectedContainer>
    </Container>
  );
};

export default Details;
