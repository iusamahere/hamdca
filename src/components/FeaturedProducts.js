import React from 'react';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const products = [
    { name: 'Product 1', image: 'image1.jpg', link: '/product1' },
    { name: 'Product 2', image: 'image2.jpg', link: '/product2' },
    { name: 'Product 3', image: 'image3.jpg', link: '/product3' },
  ];

  return (
    <div className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <a href={product.link}>View Details</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
