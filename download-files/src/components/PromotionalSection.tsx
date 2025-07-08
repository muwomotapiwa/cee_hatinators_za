import React from 'react';

const PromotionalSection: React.FC = () => {
  const handleShopNow = () => {
    const shopSection = document.getElementById('shop');
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="promotional-section">
      <div className="promo-content">
        <h2 className="promo-title">Limited Time Offer!</h2>
        <p className="promo-text">Get 20% off all Fascinators this week only! Don't miss out on elegance.</p>
        <button className="promo-button" onClick={handleShopNow}>
          Shop Now & Save
        </button>
      </div>
      <div className="promo-background-animation"></div>
    </section>
  );
};

export default PromotionalSection;