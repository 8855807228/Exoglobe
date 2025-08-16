import React from 'react';

const HeroSection: React.FC = () => (
  <section className="hero-section">
    <div className="site-container hero-inner">
      <div className="hero-card">
        <div className="hero-kicker">Premium Indian Spices</div>
        <h2 className="hero-title">Delivering Indian Spices to the World</h2>
        <p className="hero-sub">High-quality turmeric and red dried chilies sourced directly from Indian farms.</p>
        <div className="hero-actions">
          <a href="/about" className="cta-btn cta-primary">Send Inquiry</a>
          <a href="/products" className="cta-btn cta-ghost">Explore Products</a>
        </div>
      </div>
      <div className="hero-image">
  <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80" alt="Turmeric & Chillies" />
      </div>
    </div>
  </section>
);

export default HeroSection;
