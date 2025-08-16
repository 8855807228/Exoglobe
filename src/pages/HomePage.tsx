import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutTeaser from '../components/AboutTeaser';
import ProductsTeaser from '../components/ProductsTeaser';
import WhyChooseUs from '../components/WhyChooseUs';
import InquiryCTA from '../components/InquiryCTA';

const HomePage: React.FC = () => (
  <div>
    <HeroSection />
    <AboutTeaser />
    <ProductsTeaser />
    <WhyChooseUs />
    <InquiryCTA />
  </div>
);

export default HomePage;
