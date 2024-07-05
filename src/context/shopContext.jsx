import { createContext, useState } from "react";

export const ShopContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShopComponentContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateCartItem = (id, quantity) => {
    setCart(cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <ShopContext.Provider value={{ cart, addToCart, updateCartItem, removeFromCart }}>
      {children}
    </ShopContext.Provider>
  );
};
