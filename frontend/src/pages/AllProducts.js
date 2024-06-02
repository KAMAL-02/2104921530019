import React, { useState, useEffect } from 'react';
import { Container, Typography, CircularProgress } from '@mui/material';
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';
import { getProducts } from '../services/api';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (filters) => {
    setLoading(true);
    try {
      const response = await getProducts(
        filters.company,
        filters.category,
        10,
        filters.minPrice,
        filters.maxPrice
      );
      setProducts(response.data.map((p, index) => ({ ...p, id: `${p.productName}-${index}` })));
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts({});
  }, []);

  return (
    <Container>
      <Typography variant="h3">Top Products</Typography>
      <Filters onFilter={fetchProducts} />
      {loading ? <CircularProgress /> : <ProductList products={products} />}
    </Container>
  );
};

export default AllProducts;
