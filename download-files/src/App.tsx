import React, { useState } from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import AboutSection from './components/AboutSection';
import ProductDetails from './components/ProductDetails';
import NewArrivals from './components/NewArrivals';
import FeaturedCategories from './components/FeaturedCategories';
import CategoryProducts from './components/CategoryProducts';
import PromotionalSection from './components/PromotionalSection';
import RelatedProducts from './components/RelatedProducts';
import Newsletter from './components/Newsletter';
import ContactSection from './components/ContactSection';
import CustomerReviews from './components/CustomerReviews';
import Footer from './components/Footer';
import CartProvider from './context/CartContext';
import './styles/App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleCategoryClose = () => {
    setSelectedCategory(null);
  };

  return (
    <CartProvider>
      <div className="app">
        <Header />
        <HeroBanner />
        <main className="main-content">
          <AboutSection />
          <ProductDetails />
          <NewArrivals />
          <FeaturedCategories onCategorySelect={handleCategorySelect} />
          <PromotionalSection />
          <RelatedProducts />
          <Newsletter />
          <ContactSection />
          <CustomerReviews />
        </main>
        <Footer />
        {selectedCategory && (
          <CategoryProducts 
            category={selectedCategory} 
            onClose={handleCategoryClose} 
          />
        )}
      </div>
    </CartProvider>
  );
}

export default App;