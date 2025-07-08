import React from 'react';
import ProductCard from './ProductCard';

const RelatedProducts: React.FC = () => {
  const relatedProducts = [
    {
      id: 'wide-brim-hat',
      name: 'Elegant Wide Brim Hat for Weddings',
      image: 'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=300&h=300&fit=crop',
      price: 350,
      rating: 4
    },
    {
      id: 'netting-fascinator',
      name: 'Chic Fascinator with Netting Detail',
      image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=300&h=300&fit=crop',
      price: 380,
      rating: 5
    },
    {
      id: 'floral-headpiece',
      name: 'Floral Headpiece for Garden Parties',
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=300&fit=crop',
      price: 410,
      rating: 4
    },
    {
      id: 'vintage-feather',
      name: 'Vintage Style Feather Headband',
      image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=300&h=300&fit=crop',
      price: 395,
      rating: 5
    },
    {
      id: 'birdcage-veil',
      name: 'Elegant Birdcage Veil Fascinator',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop',
      price: 420,
      rating: 4
    },
    {
      id: 'derby-hat',
      name: 'Classic Derby Hat with Bow',
      image: 'https://images.unsplash.com/photo-1594736797933-d0a9c7d7ed78?w=300&h=300&fit=crop',
      price: 360,
      rating: 5
    }
  ];

  return (
    <section className="related-products">
      <div className="container">
        <div className="section-card">
          <h2 className="section-title">You May Also Like</h2>
          <p className="section-subtitle">Discover more elegant pieces from our collection</p>
          <div className="products-grid">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;