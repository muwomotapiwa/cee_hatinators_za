import React, { useState } from 'react';
import { Eye, Heart, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CategoryProductsProps {
  category: string;
  onClose: () => void;
}

const CategoryProducts: React.FC<CategoryProductsProps> = ({ category, onClose }) => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const { addToCart, showMessage } = useCart();

  const categoryData = {
    wedding: {
      title: 'Wedding Fascinators',
      description: 'Elegant pieces perfect for your special day',
      products: [
        {
          id: 'wedding-1',
          name: 'Bridal Lace Fascinator',
          image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
          description: 'Delicate lace fascinator with pearl accents, perfect for the bride or mother of the bride.'
        },
        {
          id: 'wedding-2',
          name: 'Vintage Rose Headpiece',
          image: 'https://images.unsplash.com/photo-1594736797933-d0a9c7d7ed78?w=400&h=400&fit=crop',
          description: 'Romantic vintage-inspired headpiece with silk roses and flowing ribbons.'
        },
        {
          id: 'wedding-3',
          name: 'Pearl & Feather Fascinator',
          image: 'https://images.unsplash.com/photo-1576871337634-f29c5a6c29a7?w=400&h=400&fit=crop',
          description: 'Luxurious combination of pearls and soft feathers for an ethereal bridal look.'
        },
        {
          id: 'wedding-4',
          name: 'Crystal Tiara Headband',
          image: 'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=400&h=400&fit=crop',
          description: 'Sparkling crystal tiara headband that adds royal elegance to any bridal ensemble.'
        },
        {
          id: 'wedding-5',
          name: 'Silk Flower Crown',
          image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop',
          description: 'Handcrafted silk flower crown perfect for garden weddings and bohemian brides.'
        },
        {
          id: 'wedding-6',
          name: 'Birdcage Veil Fascinator',
          image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400&h=400&fit=crop',
          description: 'Classic birdcage veil with vintage charm, ideal for retro-themed weddings.'
        },
        {
          id: 'wedding-7',
          name: 'Ivory Feather Headpiece',
          image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
          description: 'Elegant ivory feather headpiece with subtle sparkle for sophisticated brides.'
        },
        {
          id: 'wedding-8',
          name: 'Floral Hair Vine',
          image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=400&fit=crop',
          description: 'Delicate floral hair vine that can be styled in multiple ways for versatile bridal looks.'
        },
        {
          id: 'wedding-9',
          name: 'Satin Bow Fascinator',
          image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&auto=format&q=80',
          description: 'Sophisticated satin bow fascinator with vintage-inspired netting detail.'
        },
        {
          id: 'wedding-10',
          name: 'Bridal Hair Comb',
          image: 'https://images.unsplash.com/photo-1594736797933-d0a9c7d7ed78?w=400&h=400&fit=crop&auto=format&q=80',
          description: 'Ornate bridal hair comb featuring crystals and pearls for timeless elegance.'
        }
      ]
    },
    'race-days': {
      title: 'Race Day Elegance',
      description: 'Bold and stylish pieces to make you stand out',
      products: [
        {
          id: 'race-1',
          name: 'Derby Day Wide Brim',
          image: 'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=400&h=400&fit=crop',
          description: 'Statement wide-brim hat perfect for Derby Day and prestigious racing events.'
        },
        {
          id: 'race-2',
          name: 'Feathered Fascinator',
          image: 'https://images.unsplash.com/photo-1594736797933-d0a9c7d7ed78?w=400&h=400&fit=crop',
          description: 'Bold feathered fascinator designed to turn heads at the track.'
        },
        {
          id: 'race-3',
          name: 'Colorful Pillbox Hat',
          image: 'https://images.unsplash.com/photo-1576871337634-f29c5a6c29a7?w=400&h=400&fit=crop',
          description: 'Vibrant pillbox hat with dramatic feather accents for race day glamour.'
        },
        {
          id: 'race-4',
          name: 'Sculptural Headpiece',
          image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop',
          description: 'Avant-garde sculptural headpiece that makes a bold fashion statement.'
        },
        {
          id: 'race-5',
          name: 'Ribbon & Feather Hat',
          image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400&h=400&fit=crop',
          description: 'Elegant hat featuring flowing ribbons and dramatic feather arrangements.'
        },
        {
          id: 'race-6',
          name: 'Mesh Fascinator',
          image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
          description: 'Modern mesh fascinator with geometric design elements for contemporary style.'
        },
        {
          id: 'race-7',
          name: 'Oversized Bow Hat',
          image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=400&fit=crop',
          description: 'Dramatic oversized bow hat that commands attention at any racing event.'
        },
        {
          id: 'race-8',
          name: 'Sinamay Disc Fascinator',
          image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&auto=format&q=80',
          description: 'Sophisticated sinamay disc fascinator with intricate detailing and bold presence.'
        },
        {
          id: 'race-9',
          name: 'Asymmetrical Headpiece',
          image: 'https://images.unsplash.com/photo-1594736797933-d0a9c7d7ed78?w=400&h=400&fit=crop&auto=format&q=80',
          description: 'Modern asymmetrical headpiece featuring unique sculptural elements.'
        },
        {
          id: 'race-10',
          name: 'Vintage Racing Hat',
          image: 'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=400&h=400&fit=crop&auto=format&q=80',
          description: 'Classic vintage-style racing hat with timeless appeal and modern comfort.'
        }
      ]
    },
    cocktail: {
      title: 'Cocktail Headpieces',
      description: 'Sophisticated pieces for evening elegance',
      products: [
        {
          id: 'cocktail-1',
          name: 'Art Deco Headband',
          image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=400&fit=crop',
          description: 'Glamorous Art Deco-inspired headband with crystal embellishments for evening events.'
        },
        {
          id: 'cocktail-2',
          name: 'Velvet Fascinator',
          image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop',
          description: 'Luxurious velvet fascinator perfect for sophisticated cocktail parties.'
        },
        {
          id: 'cocktail-3',
          name: 'Beaded Hair Vine',
          image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400&h=400&fit=crop',
          description: 'Delicate beaded hair vine that adds sparkle to any evening ensemble.'
        },
        {
          id: 'cocktail-4',
          name: 'Feather & Crystal Clip',
          image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
          description: 'Elegant hair clip featuring soft feathers and sparkling crystals.'
        },
        {
          id: 'cocktail-5',
          name: 'Metallic Headpiece',
          image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
          description: 'Modern metallic headpiece with geometric design for contemporary evening wear.'
        },
        {
          id: 'cocktail-6',
          name: 'Lace & Pearl Fascinator',
          image: 'https://images.unsplash.com/photo-1594736797933-d0a9c7d7ed78?w=400&h=400&fit=crop',
          description: 'Romantic lace fascinator adorned with pearls for timeless elegance.'
        },
        {
          id: 'cocktail-7',
          name: 'Minimalist Hair Comb',
          image: 'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=400&h=400&fit=crop',
          description: 'Sleek minimalist hair comb with subtle crystal accents for understated glamour.'
        },
        {
          id: 'cocktail-8',
          name: 'Vintage Brooch Fascinator',
          image: 'https://images.unsplash.com/photo-1576871337634-f29c5a6c29a7?w=400&h=400&fit=crop',
          description: 'Vintage-inspired fascinator featuring an ornate brooch centerpiece.'
        },
        {
          id: 'cocktail-9',
          name: 'Silk Flower Headpiece',
          image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop&auto=format&q=80',
          description: 'Sophisticated silk flower headpiece perfect for upscale evening events.'
        },
        {
          id: 'cocktail-10',
          name: 'Crystal Chain Headband',
          image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400&h=400&fit=crop&auto=format&q=80',
          description: 'Glamorous crystal chain headband that catches the light beautifully.'
        }
      ]
    },
    everyday: {
      title: 'Everyday Style',
      description: 'Versatile pieces for daily elegance',
      products: [
        {
          id: 'everyday-1',
          name: 'Classic Beret',
          image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
          description: 'Timeless beret that adds Parisian chic to any casual outfit.'
        },
        {
          id: 'everyday-2',
          name: 'Wool Cloche Hat',
          image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
          description: 'Vintage-inspired wool cloche hat perfect for autumn and winter styling.'
        },
        {
          id: 'everyday-3',
          name: 'Casual Headband',
          image: 'https://images.unsplash.com/photo-1594736797933-d0a9c7d7ed78?w=400&h=400&fit=crop',
          description: 'Comfortable padded headband that elevates everyday hairstyles.'
        },
        {
          id: 'everyday-4',
          name: 'Silk Scarf Headwrap',
          image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=400&fit=crop',
          description: 'Luxurious silk scarf designed for versatile headwrap styling.'
        },
        {
          id: 'everyday-5',
          name: 'Knit Beanie',
          image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop',
          description: 'Stylish knit beanie with subtle embellishments for casual elegance.'
        },
        {
          id: 'everyday-6',
          name: 'Wide Brim Sun Hat',
          image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400&h=400&fit=crop',
          description: 'Practical yet stylish wide-brim hat for sun protection with flair.'
        },
        {
          id: 'everyday-7',
          name: 'Baseball Cap Chic',
          image: 'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=400&h=400&fit=crop',
          description: 'Elevated baseball cap with premium materials and sophisticated details.'
        },
        {
          id: 'everyday-8',
          name: 'Bucket Hat',
          image: 'https://images.unsplash.com/photo-1576871337634-f29c5a6c29a7?w=400&h=400&fit=crop',
          description: 'Trendy bucket hat that combines comfort with contemporary style.'
        },
        {
          id: 'everyday-9',
          name: 'Hair Scarf',
          image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop&auto=format&q=80',
          description: 'Versatile hair scarf that can be styled in multiple ways for everyday wear.'
        },
        {
          id: 'everyday-10',
          name: 'Casual Fascinator',
          image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&auto=format&q=80',
          description: 'Understated fascinator perfect for adding elegance to casual occasions.'
        }
      ]
    }
  };

  const currentCategory = categoryData[category as keyof typeof categoryData];

  if (!currentCategory) return null;

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: 0, // No price shown
      image: product.image,
      quantity: 1
    });
    showMessage(`Added '${product.name}' to your consultation list. We'll contact you with pricing details.`);
    setSelectedProduct(null);
  };

  const handleConsultation = (product: any) => {
    showMessage(`Consultation request sent for '${product.name}'. We'll contact you within 24 hours to discuss pricing and availability.`);
    setSelectedProduct(null);
  };

  return (
    <div className="category-products-overlay">
      <div className="category-products-modal">
        <div className="category-products-header">
          <div>
            <h2>{currentCategory.title}</h2>
            <p>{currentCategory.description}</p>
          </div>
          <button className="close-category-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="category-products-grid">
          {currentCategory.products.map((product) => (
            <div key={product.id} className="category-product-card">
              <div className="category-product-image-container">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="category-product-image"
                />
                <div className="category-product-overlay">
                  <button 
                    className="category-product-view-btn"
                    onClick={() => handleProductClick(product)}
                  >
                    <Eye size={20} />
                    View Details
                  </button>
                </div>
              </div>
              <div className="category-product-info">
                <h3>{product.name}</h3>
                <p className="consultation-text">Contact for consultation</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="product-detail-overlay">
          <div className="product-detail-modal">
            <div className="product-detail-header">
              <h3>{selectedProduct.name}</h3>
              <button 
                className="close-product-detail-btn"
                onClick={() => setSelectedProduct(null)}
              >
                ×
              </button>
            </div>
            <div className="product-detail-content">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name}
                className="product-detail-image"
              />
              <div className="product-detail-info">
                <p>{selectedProduct.description}</p>
                <div className="product-detail-actions">
                  <button 
                    className="consultation-btn"
                    onClick={() => handleConsultation(selectedProduct)}
                  >
                    <MessageCircle size={20} />
                    Request Consultation
                  </button>
                  <button 
                    className="add-to-consultation-btn"
                    onClick={() => handleAddToCart(selectedProduct)}
                  >
                    <Heart size={20} />
                    Add to Consultation List
                  </button>
                </div>
                <p className="consultation-note">
                  Our team will contact you within 24 hours to discuss pricing, 
                  availability, and customization options for this piece.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryProducts;