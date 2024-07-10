import { useContext } from "react";
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { ShopContext } from "../context/shopContext";
import Layout from "./layout";
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

const Checkout = () => {
  const { cart, updateCartItem, removeFromCart, makePayment } = useContext(ShopContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleQuantityChange = (id, quantity, stock) => {
    if (quantity <= 0) {
      return;
    } else if (quantity > stock) {
      Toastify({
        text: `No puedes agregar más de ${stock} unidades de este producto.`,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #F74F4F, #FF0000)",
        },
        onClick: function () { }
      }).showToast();
      return;
    }

    updateCartItem(id, quantity);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    await makePayment(); // Llamar a la función makePayment para procesar el pago
  };

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl text-center font-bold mb-4">Carrito de Compras</h1>
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-screen">
            <ShoppingBagIcon className='h-16 w-16' />
            <p className="text-2xl mt-5">El carrito de compras está vacío</p>
          </div>
        ) : (
          <div className="bg-white shadow-md rounded-lg p-6">
            {cart.map((product) => (
              <div key={product.id} className="flex items-center justify-between mb-4">
                <img src={product.image} alt={product.title} className="w-20 h-20 object-cover" />
                <div className="flex-1 ml-4">
                  <h2 className="text-lg font-semibold">{product.title}</h2>
                  <p className="text-sm text-gray-600">Precio: ${product.price.toLocaleString()}</p>
                  <div className="flex items-center mt-2">
                    <button
                      className="px-2 py-1 bg-gray-200 text-gray-800 rounded"
                      onClick={() => handleQuantityChange(product.id, product.quantity - 1, product.stock)}
                    >
                      -
                    </button>
                    <span className="mx-2">{product.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 text-gray-800 rounded"
                      onClick={() => handleQuantityChange(product.id, product.quantity + 1, product.stock)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="px-4 py-2 bg-black text-white rounded"
                  onClick={() => removeFromCart(product.id)}
                >
                  Eliminar
                </button>
              </div>
            ))}
            <div className="mt-6 items-center justify-center p-5 bg-slate-100">
              <h2 className="text-xl font-semibold">Total: ${totalPrice.toLocaleString()}</h2>
            </div>

            <div className="mt-6 bg-slate-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Información del Cliente</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                  <label className="mb-2 font-semibold text-right sm:text-left">Nombre:</label>
                  <input type="text" className="p-2 rounded bg-gray-700 text-white col-span-2" placeholder="Nombre completo" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                  <label className="mb-2 font-semibold text-right sm:text-left">Número de documento:</label>
                  <input type="text" className="p-2 rounded bg-gray-700 text-white col-span-2" placeholder="Número de documento" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                  <label className="mb-2 font-semibold text-right sm:text-left">Correo electrónico:</label>
                  <input type="email" className="p-2 rounded bg-gray-700 text-white col-span-2" placeholder="Correo electrónico" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                  <label className="mb-2 font-semibold text-right sm:text-left">Número de teléfono:</label>
                  <input type="tel" className="p-2 rounded bg-gray-700 text-white col-span-2" placeholder="Número de teléfono" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                  <label className="mb-2 font-semibold text-right sm:text-left">País:</label>
                  <input type="text" className="p-2 rounded bg-gray-700 text-white col-span-2" placeholder="País" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                  <label className="mb-2 font-semibold text-right sm:text-left">Ciudad:</label>
                  <input type="text" className="p-2 rounded bg-gray-700 text-white col-span-2" placeholder="Ciudad" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                  <label className="mb-2 font-semibold text-right sm:text-left">Dirección:</label>
                  <input type="text" className="p-2 rounded bg-gray-700 text-white col-span-2" placeholder="Dirección" required />
                </div>
                <button type="submit" className="w-full py-3 bg-black text-white font-semibold rounded hover:bg-slate-900 hover:text-slate-300 transition-colors">Pagar</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Checkout;
