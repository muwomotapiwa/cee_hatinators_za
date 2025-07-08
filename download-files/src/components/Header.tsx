import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems, isCartOpen, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo-section">
            <div className="logo-icon">CH</div>
            <a href="#home" className="logo-text" onClick={() => handleNavClick('home')}>
              Cee Hatinators
            </a>
          </div>

          <nav className="desktop-nav">
            <a href="#home" onClick={() => handleNavClick('home')}>Home</a>
            <a href="#shop" onClick={() => handleNavClick('shop')}>Shop</a>
            <a href="#about" onClick={() => handleNavClick('about')}>About Us</a>
            <a href="#contact" onClick={() => handleNavClick('contact')}>Contact</a>
          </nav>

          <div className="header-actions">
            <button className="icon-button">
              <Search size={24} />
            </button>
            <button 
              className="cart-button" 
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart size={24} />
              {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
            </button>
            <button 
              className="mobile-menu-button"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <button 
            className="close-button"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
          <div className="mobile-logo">
            <div className="logo-icon">CH</div>
            <span>Cee Hatinators</span>
          </div>
          <nav className="mobile-nav">
            <a href="#home" onClick={() => handleNavClick('home')}>Home</a>
            <a href="#shop" onClick={() => handleNavClick('shop')}>Shop</a>
            <a href="#about" onClick={() => handleNavClick('about')}>About Us</a>
            <a href="#contact" onClick={() => handleNavClick('contact')}>Contact</a>
            <a href="#account" onClick={() => handleNavClick('account')}>My Account</a>
            <a href="#wishlist" onClick={() => handleNavClick('wishlist')}>Wishlist</a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;