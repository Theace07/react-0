import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItem(item, quantity) {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) => p.id === item.id ? { ...p, quantity: p.quantity + quantity } : p);
      }
      return [...prev, { ...item, quantity }];
    });
  }

  function removeItem(id) {
    setCart((prev) => prev.filter((p) => p.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  function updateQuantity(id, quantity) {
    if (quantity <= 0) {
      removeItem(id);
    } else {
      setCart((prev) => prev.map((p) => p.id === id ? { ...p, quantity } : p));
    }
  }

  const value = { cart, addItem, removeItem, clearCart, updateQuantity };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContext;
