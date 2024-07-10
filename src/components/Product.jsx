import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { ShopContext } from "../context/shopContext";
import Layout from "./layout";
import { db } from "../firebase/client";

const Product = () => {
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { idItem } = useParams();
  const { cart, addToCart } = useContext(ShopContext);

  useEffect(() => {
    const getItemById = async (id) => {
      try {
        const itemRef = doc(db, "products", id);
        const itemDoc = await getDoc(itemRef);
        if (itemDoc.exists()) {
          setItem({ id: itemDoc.id, ...itemDoc.data() });
        } else {
          console.error("El ítem no existe");
        }
      } catch (err) {
        console.error("Error al obtener el ítem:", err);
      }
    };

    if (idItem) {
      getItemById(idItem);
    }
  }, [idItem]);

  const handleAddToCart = () => {
    const existingProduct = cart.find((product) => product.id === item.id);
    const currentQuantityInCart = existingProduct ? existingProduct.quantity : 0;
    if (currentQuantityInCart + quantity > item.stock) {
      alert(`No puedes agregar más de ${item.stock} unidades de este producto.`);
      return;
    }
    addToCart({ ...item, quantity });
  };

  const handleQuantityChange = (delta) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + delta;
      if (newQuantity < 1) return 1;
      if (newQuantity > item.stock) return item.stock;
      return newQuantity;
    });
  };

  return (
    <Layout>
      {item && (
        <>
          <h1 className="text-lg font-bold mb-6">{item.category.replace("-", " de ")}</h1>
          <div className="container flex flex-col md:flex-row w-full px-10 md:px-20 lg:px-40 xl:px-60 py-10 bg-slate-100 rounded-lg gap-6 shadow-lg">
            <div className="bg-slate-300 w-full md:w-1/2 h-auto rounded-lg shadow-md p-4 cursor-pointer transition duration-300 transform hover:scale-105">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <figure>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover object-square w-full h-104 sm:h-104 md:h-110 lg:h-110"
                  />
                </figure>
                <span className="absolute top-0 right-0 bg-white text-black px-2 py-1 text-xs font-semibold rounded-bl-lg">New</span>
              </div>
              <div className="text-sm">
                <p className="text-lg font-semibold mb-2">{item.title}</p>
                <p className="text-lg font-bold">Precio: ${item.price.toLocaleString()}</p>
                <p className="text-sm text-gray-500">Stock: {item.stock}</p>
              </div>
              <div className="px-8 mt-6 left-0 right-0 text-center">
                <div className="flex justify-center items-center mb-4">
                  <button
                    className="px-2 py-1 bg-gray-200 text-gray-800 rounded"
                    onClick={() => handleQuantityChange(-1)}
                  >
                    -
                  </button>
                  <span className="mx-2">{quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 text-gray-800 rounded"
                    onClick={() => handleQuantityChange(1)}
                  >
                    +
                  </button>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-slate-700 text-white font-semibold rounded hover:bg-slate-900 hover:text-white transition-colors"
                  onClick={handleAddToCart}
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
            <div className="bg-slate-200 rounded-lg w-full md:w-1/2 p-4 transition duration-300 transform hover:scale-105 shadow-lg">
              <h3 className="font-bold px-8 mt-6 mb-2">Descripción:</h3>
              <hr className="font-bold ml-7 mt-0" />
              <div className="mt-2">
                {item.description.split("\n").map((paragraph, index) => (
                  <p className="px-8 mb-2 text-justify" key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default Product;
