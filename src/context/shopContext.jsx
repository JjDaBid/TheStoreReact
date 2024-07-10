import { createContext, useState, useEffect } from "react";

export const ShopContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShopComponentContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.quantity, 0);
    setTotalItems(total);
  }, [cart]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      const newQuantity = existingProduct.quantity + product.quantity;
      if (newQuantity > product.stock) {
        alert(`No puedes agregar más de ${product.stock} unidades de este producto.`);
        return;
      }
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, quantity: newQuantity } : item
      ));
    } else {
      if (product.quantity > product.stock) {
        alert(`No puedes agregar más de ${product.stock} unidades de este producto.`);
        return;
      }
      setCart([...cart, product]);
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
    <ShopContext.Provider value={{ cart, totalItems, addToCart, updateCartItem, removeFromCart }}>
      {children}
    </ShopContext.Provider>
  );
};
