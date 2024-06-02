import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import ProductDetails from '../components/ProductDetails';

const ProductPage = () => {
  const { id } = useParams();

  return (
    <Container>
      <Typography variant="h3">Product Details</Typography>
      <ProductDetails productId={id} />
    </Container>
  );
};

export default ProductPage;
