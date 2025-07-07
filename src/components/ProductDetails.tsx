import React, { useState } from 'react';
import { Heart, Star, Plus, Minus, ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductDetails: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('One Size');
  const [isFavorited, setIsFavorited] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  
  const { addToCart, showMessage } = useCart();

  const product = {
    id: 'elegant-feather-fascinator',
    name: 'Elegant Feather Linen Rayon Kentucky Hat Fascinator',
    price: 428,
    originalPrice: 600,
    discount: 28,
    description: 'Elevate your style with this exquisite Elegant & Luxurious Feather Linen Rayon Kentucky Hat Fascinator. Perfect for Melbourne Cup, weddings, horse races, or any ladies\' day event. Handcrafted with delicate feathers and a charming floral design, it adds a touch of sophistication to any outfit.',
    images: [
      'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&h=600&fit=crop'
    ],
    colors: [
      { name: 'Black', value: 'black', color: '#000000' },
      { name: 'White', value: 'white', color: '#FFFFFF' },
      { name: 'Red', value: 'red', color: '#DC2626' },
      { name: 'Blue', value: 'blue', color: '#2563EB' }
    ],
    rating: 4,
    reviews: 128
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: quantity,
      color: selectedColor,
      size: selectedSize
    });
    showMessage(`Added ${quantity} of '${product.name}' to cart.`);
  };

  return (
    <section id="shop" className="product-details">
      <div className="container">
        <div className="product-container">
          <div className="product-gallery">
            <div className="main-image-container">
              <img 
                src={product.images[activeImage]} 
                alt={product.name}
                className="main-image"
              />
              <button 
                className={`favorite-button ${isFavorited ? 'favorited' : ''}`}
                onClick={() => setIsFavorited(!isFavorited)}
              >
                <Heart size={24} fill={isFavorited ? 'currentColor' : 'none'} />
              </button>
              <div className="quick-view-overlay">
                <Eye size={48} />
              </div>
            </div>
            <div className="thumbnail-gallery">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`View ${index + 1}`}
                  className={`thumbnail ${index === activeImage ? 'active' : ''}`}
                  onClick={() => setActiveImage(index)}
                />
              ))}
            </div>
          </div>

          <div className="product-info">
            <nav className="breadcrumbs">
              Home &gt; Hats & Fascinators &gt; {product.name}
            </nav>

            <h1 className="product-title">{product.name}</h1>

            <div className="rating-section">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    fill={i < product.rating ? '#FCD34D' : 'none'}
                    stroke={i < product.rating ? '#FCD34D' : '#D1D5DB'}
                  />
                ))}
              </div>
              <span className="review-count">({product.reviews} Reviews)</span>
            </div>

            <div className="price-section">
              <span className="current-price">R{product.price}.00</span>
              <span className="original-price">R{product.originalPrice}.00</span>
              <span className="discount">({product.discount}% Off)</span>
            </div>

            <p className="product-description">{product.description}</p>

            <div className="product-options">
              <div className="option-group">
                <label>Color:</label>
                <div className="color-options">
                  {product.colors.map((color) => (
                    <button
                      key={color.value}
                      className={`color-option ${selectedColor === color.value ? 'active' : ''}`}
                      style={{ backgroundColor: color.color }}
                      onClick={() => setSelectedColor(color.value)}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              <div className="option-group">
                <label htmlFor="size">Size:</label>
                <select 
                  id="size" 
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="size-select"
                >
                  <option>One Size</option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
              </div>
            </div>

            <div className="purchase-section">
              <div className="quantity-controls">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="quantity-button"
                >
                  <Minus size={20} />
                </button>
                <span className="quantity-display">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="quantity-button"
                >
                  <Plus size={20} />
                </button>
              </div>

              <button className="add-to-cart-button" onClick={handleAddToCart}>
                <ShoppingCart size={20} />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;