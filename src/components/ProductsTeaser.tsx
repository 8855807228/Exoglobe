import React from 'react';

const ProductsTeaser: React.FC = () => (
  <section className="products-teaser">
    <h2>Our Products</h2>
    <div className="product-highlights">
      <div className="product-item">
  <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" alt="Turmeric" />
        <h3>Turmeric</h3>
      </div>
      <div className="product-item">
  <img src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80" alt="Red Dried Chili" />
        <h3>Red Dried Chilies</h3>
      </div>
    </div>
    <a href="/products" className="cta-btn">Explore Products</a>
  </section>
);

export default ProductsTeaser;
