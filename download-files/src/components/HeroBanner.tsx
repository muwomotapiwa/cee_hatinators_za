import React from 'react';

const HeroBanner: React.FC = () => {
  const handleExploreClick = () => {
    const shopSection = document.getElementById('shop');
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-banner">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Cee Hatinators</h1>
        <p className="hero-subtitle">Discover Elegance for Every Occasion</p>
        <button className="cta-button" onClick={handleExploreClick}>
          Explore Our Collection
        </button>
      </div>
      <div className="hero-background-overlay"></div>
    </section>
  );
};

export default HeroBanner;