import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container, CardMedia } from '@mui/material';

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) return <div>Product not found</div>;

  return (
    <Container>
      <CardMedia
        component="img"
        height="140"
        image={`https://via.placeholder.com/150?text=${product.productName}`}
        alt={product.productName}
      />
      <Typography variant="h3">{product.productName}</Typography>
      <Typography variant="h5">Price: ${product.price}</Typography>
      <Typography variant="h5">Rating: {product.rating}</Typography>
      <Typography variant="h5">Discount: {product.discount}%</Typography>
      <Typography variant="h5">Availability: {product.availability}</Typography>
    </Container>
  );
};

export default ProductDetails;
