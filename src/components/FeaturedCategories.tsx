import React from 'react';

interface FeaturedCategoriesProps {
  onCategorySelect: (category: string) => void;
}

const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({ onCategorySelect }) => {
  const categories = [
    {
      id: 'wedding',
      name: 'Wedding Fascinators',
      description: 'Perfect for the bride or guests.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop',
      color: 'rgba(167, 139, 250, 0.9)'
    },
    {
      id: 'race-days',
      name: 'Race Day Elegance',
      description: 'Stand out at the track.',
      image: 'https://images.unsplash.com/photo-1594736797933-d0a9c7d7ed78?w=400&h=300&fit=crop',
      color: 'rgba(252, 211, 77, 0.9)'
    },
    {
      id: 'cocktail',
      name: 'Cocktail Headpieces',
      description: 'Chic accessories for evenings.',
      image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=300&fit=crop',
      color: 'rgba(251, 113, 133, 0.9)'
    },
    {
      id: 'everyday',
      name: 'Everyday Style',
      description: 'Elevate your daily look.',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
      color: 'rgba(96, 165, 250, 0.9)'
    }
  ];

  return (
    <section className="featured-categories">
      <div className="container">
        <div className="section-card">
          <h2 className="section-title">Shop by Category</h2>
          <div className="categories-grid">
            {categories.map((category) => (
              <div 
                key={category.id} 
                className="category-card"
                onClick={() => onCategorySelect(category.id)}
              >
                <div 
                  className="category-image"
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  <div 
                    className="category-overlay"
                    style={{ backgroundColor: category.color }}
                  >
                    <h3 className="category-title">{category.name}</h3>
                    <p className="category-description">{category.description}</p>
                    <button className="category-browse-btn">Browse Collection</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;