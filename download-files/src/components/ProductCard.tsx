import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, showMessage } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
    showMessage(`Added '${product.name}' to cart.`);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-overlay">
          <button className="quick-add-button" onClick={handleAddToCart}>
            <ShoppingCart size={20} />
            <span>Quick Add</span>
          </button>
        </div>
      </div>
      <div className="product-card-content">
        <h3 className="product-card-title">{product.name}</h3>
        <div className="product-rating">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              fill={i < product.rating ? '#FCD34D' : 'none'}
              stroke={i < product.rating ? '#FCD34D' : '#D1D5DB'}
            />
          ))}
        </div>
        <div className="product-price">R{product.price}.00</div>
      </div>
    </div>
  );
};

export default ProductCard;