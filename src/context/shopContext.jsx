import { createContext, useState, useEffect } from "react";
import Swal from 'sweetalert2';

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

  const removeFromCart = async (id) => {
    try {
      const result = await Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esta acción eliminará el producto del carrito de compras.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        confirmButtonColor: '#FE001B',
        cancelButtonText: 'Cancelar',
        customClass: {
          container: 'custom-alert-container',
        },
      });
      if (result.isConfirmed) {
        setCart(cart.filter((item) => item.id !== id));
        await Swal.fire({
          title: 'Eliminado',
          text: 'El producto ha sido retirado del carrito de compras.',
          icon: 'success',
          confirmButtonColor: '#FE001B',
        });
      }
    } catch (error) {
      Swal.fire('Error', 'Ha ocurrido un error al retirar el producto.', 'error');
    }
  };

  const makePayment = async () => {
    try {
      const result = await Swal.fire({
        title: '¿Confirma la realización del pago?',
        text: 'Esta acción realizará el pago de su compra',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, confirmo',
        confirmButtonColor: '#FE001B',
        cancelButtonText: 'Cancelar',
        customClass: {
          container: 'custom-alert-container',
        },
      });

      if (result.isConfirmed) { 
        await Swal.fire({
          title: 'Compra exitosa',
          text: 'Su compra ha sido procesada satisfactoriamente',
          icon: 'success',
          confirmButtonColor: '#FE001B',
        });
        setCart([]); // Vaciar el carrito después del pago exitoso
      }
    } catch (error) {
      Swal.fire('Error', 'Ha ocurrido un error al pagar el producto.', 'error');
    }  
  }

  return (
    <ShopContext.Provider value={{ cart, totalItems, addToCart, updateCartItem, removeFromCart, makePayment }}>
      {children}
    </ShopContext.Provider>
  );
};
