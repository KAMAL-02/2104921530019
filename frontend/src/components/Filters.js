import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const Filters = ({ onFilter }) => {
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const [rating, setRating] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [availability, setAvailability] = useState('');

  const handleFilter = () => {
    onFilter({ category, company, rating, minPrice, maxPrice, availability });
  };

  return (
    <div>
      <FormControl>
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <MenuItem value="Phone">Phone</MenuItem>
          <MenuItem value="Laptop">Laptop</MenuItem>
          {/* Add other categories here */}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Company</InputLabel>
        <Select value={company} onChange={(e) => setCompany(e.target.value)}>
          <MenuItem value="AMZ">AMZ</MenuItem>
          <MenuItem value="FLP">FLP</MenuItem>
          {/* Add other companies here */}
        </Select>
      </FormControl>
      <TextField
        label="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <TextField
        label="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <TextField
        label="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <FormControl>
        <InputLabel>Availability</InputLabel>
        <Select value={availability} onChange={(e) => setAvailability(e.target.value)}>
          <MenuItem value="yes">Yes</MenuItem>
          <MenuItem value="no">No</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={handleFilter}>Filter</Button>
    </div>
  );
};

export default Filters;
