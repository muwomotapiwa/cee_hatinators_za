import React from 'react';
import ProductCard from './ProductCard';

const NewArrivals: React.FC = () => {
  const newArrivals = [
    {
      id: 'elegant-rose',
      name: 'Elegant Rose Fascinator',
      image: 'https://images.unsplash.com/photo-1594736797933-d0a9c7d7ed78?w=300&h=300&fit=crop',
      price: 450,
      rating: 5
    },
    {
      id: 'mesh-headpiece',
      name: 'Sophisticated Mesh Headpiece',
      image: 'https://images.unsplash.com/photo-1576871337634-f29c5a6c29a7?w=300&h=300&fit=crop',
      price: 380,
      rating: 4
    },
    {
      id: 'pearl-headband',
      name: 'Feathered Pearl Headband',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop',
      price: 520,
      rating: 5
    },
    {
      id: 'bow-fascinator',
      name: 'Classic Bow Fascinator',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=300&fit=crop',
      price: 300,
      rating: 4
    },
    {
      id: 'crystal-hat',
      name: 'Crystal Embellished Hat',
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=300&fit=crop',
      price: 600,
      rating: 5
    },
    {
      id: 'mini-top-hat',
      name: 'Mini Top Hat Fascinator',
      image: 'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=300&h=300&fit=crop',
      price: 400,
      rating: 4
    }
  ];

  return (
    <section className="new-arrivals">
      <div className="container">
        <div className="section-card">
          <h2 className="section-title">New Arrivals</h2>
          <p className="section-subtitle">Discover our latest collection of elegant headwear</p>
          <div className="products-grid">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;