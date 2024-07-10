import { useEffect, useState } from "react";
import ItemDetailContainer from "./ItemDetailContainer";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/client";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    const getItemsByCategory = async () => {
      try {
        const itemsRef = collection(db, "products");
        const q = idCategory ? query(itemsRef, where("category", "==", idCategory)) : itemsRef;
        const querySnapshot = await getDocs(q);
        const itemsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setItems(itemsList);
      } catch (err) {
        console.error("Error fetching items: ", err);
      }
    };

    getItemsByCategory();
  }, [idCategory]);

  return (
    <>
      <h1 className='mb-14 font-semibold text-lg'>
        {idCategory ? <>Categoría: {idCategory}</> : <>Todos los productos</>}
      </h1>

      <div className='grid gap-8 grid-cols-4 w-full max-w-screen-lg'>
        {items.map(item => (
          <ItemDetailContainer key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}

export default ItemListContainer;
