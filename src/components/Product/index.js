// Product.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();

  // Fetch detailed information about the product based on the 'id' parameter
  // You can use a similar fetch request as in the Home component

  // For the sake of this example, I'll just display the product ID
  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
    </div>
  );
};

export default Product;
