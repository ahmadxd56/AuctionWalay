import React from 'react';
import '../style/ProductPage.css';
import Listings from '../dummyData'; // Import your dummy data
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();

  // Find the product that matches the id
  const product = Listings.find((listing) => listing.id === parseInt(id));

  if (!product) {
    // Handle the case where the product with the given id is not found
    return <div>Product not found.</div>;
  }

  return (
    <div className="product-page">
      <div className="product-details">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        {/* Include more details like condition here */}
      </div>
      <div className="product-image">
        <img src={product.images[0]} alt={product.name} />
      </div>
    </div>
  );
};

export default ProductPage;
