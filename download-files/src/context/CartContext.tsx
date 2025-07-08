import React, { createContext, useContext, useState, ReactNode } from 'react';
import CartModal from '../components/CartModal';
import MessageModal from '../components/MessageModal';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  color?: string;
  size?: string;
}

interface CartContextType {
  cartItems: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  showMessage: (message: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  const addToCart = (newItem: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
    const quantity = newItem.quantity || 1;
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === newItem.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...newItem, quantity }];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const showMessage = (msg: string) => {
    setMessage(msg);
    setIsMessageOpen(true);
  };

  const value: CartContextType = {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    showMessage
  };

  return (
    <CartContext.Provider value={value}>
      {children}
      <CartModal />
      <MessageModal 
        message={message}
        isOpen={isMessageOpen}
        onClose={() => setIsMessageOpen(false)}
      />
    </CartContext.Provider>
  );
};

export default CartProvider;