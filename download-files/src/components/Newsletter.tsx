import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const { showMessage } = useCart();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      showMessage('Thank you for subscribing to our newsletter!');
      setEmail('');
    }
  };

  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <h2 className="newsletter-title">Stay Updated!</h2>
        <p className="newsletter-text">Subscribe to our newsletter for exclusive offers and the latest arrivals.</p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="newsletter-input"
            required
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;