import { useContext } from "react";
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShopContext } from "../context/shopContext";
import Layout from "./layout";

const Checkout = () => {
  const { cart, updateCartItem, removeFromCart } = useContext(ShopContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleQuantityChange = (id, quantity) => {
    if (quantity <= 0) return;
    updateCartItem(id, quantity);
  };

  return (
    <Layout>
        <div className="container mx-auto p-4">
        <h1 className="text-2xl text-center font-bold mb-4">Carrito de Compras</h1>
        {cart.length === 0 ? (
            <>
                <div className="flex flex-col items-center justify-center h-screen">
                    <ShoppingBagIcon className='h-16 w-16'></ShoppingBagIcon>
                    <p className="text-2xl mt-5">El carrito de compras está vacío</p>
                </div>
            </>
            
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
                                onClick={() => handleQuantityChange(product.id, product.quantity - 1)}
                            >
                                -
                            </button>
                            <span className="mx-2">{product.quantity}</span>
                            <button 
                                className="px-2 py-1 bg-gray-200 text-gray-800 rounded"
                                onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
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
                    <button 
                        className="px-4 py-2 mt-3 bg-black text-white rounded"                       
                    >
                        Pagar
                    </button>
                </div>
            </div>
        )}
        </div>

    </Layout>
  );
};

export default Checkout;
