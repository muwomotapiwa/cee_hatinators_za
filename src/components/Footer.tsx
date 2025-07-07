import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Cee Hatinators</h3>
            <p className="footer-text">
              Your premier destination for exquisite and luxurious headwear. Elevate your style with our unique designs.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Facebook size={24} />
              </a>
              <a href="#" className="social-link">
                <Instagram size={24} />
              </a>
              <a href="#" className="social-link">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#shop">Shop All</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Get in Touch</h3>
            <div className="contact-info">
              <p>Email: <a href="mailto:info@ceehatinators.com">info@ceehatinators.com</a></p>
              <p>Phone: <a href="tel:+27112345678">+27 11 234 5678</a></p>
              <p>Address: 123 Elegance Street, Fashion District, Johannesburg, South Africa</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Cee Hatinators. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;