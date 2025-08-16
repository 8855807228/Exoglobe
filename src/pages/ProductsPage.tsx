import React from 'react';

const ProductsPage: React.FC = () => (
  <div className="products-page section">
    <div className="site-container">
      <h1>Our Products</h1>
      <section className="card">
        <h2>Turmeric</h2>
        <div className="products-grid">
          <div className="product-tile">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" alt="Turmeric Fingers" />
            <div className="product-title">Turmeric Fingers</div>
            <div className="product-meta">Grades: Salem, Erode, Rajapuri — Moisture &lt;10%</div>
          </div>
          <div className="product-tile">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" alt="Turmeric Powder" />
            <div className="product-title">Turmeric Powder</div>
            <div className="product-meta">Curcumin 2–5% — 25kg / 50kg PP Bags</div>
          </div>
        </div>
      </section>

      <section className="card" style={{marginTop:'1rem'}}>
        <h2>Red Dried Chili</h2>
        <div className="products-grid">
          <div className="product-tile">
            <img src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80" alt="Byadgi Chili" />
            <div className="product-title">Byadgi</div>
            <div className="product-meta">Bright red — heat varies</div>
          </div>
          <div className="product-tile">
            <img src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80" alt="Sannam / Teja Chili" />
            <div className="product-title">Sannam / Teja</div>
            <div className="product-meta">High color, export-grade packaging</div>
          </div>
        </div>
      </section>

      <section className="card" style={{marginTop:'1rem'}}>
        <h2>Coming Soon</h2>
        <p>Stay tuned for cumin, black pepper, and more!</p>
      </section>
    </div>
  </div>
);

export default ProductsPage;
