import { useEffect, useState } from "react";
import ItemDetailContainer from "./ItemDetailContainer";
import { getItems } from "../data/data";
import { useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function ItemListContainer () {

  const [items, setItems] = useState(null);

  const { idCategory } = useParams()

  useEffect(() => {
    getItems(idCategory)
      .then(response => setItems(response))
      .catch(err => setItems(err))     
  }, [idCategory])

    return (  
      <>        
        <h1 className='mb-14 font-semibold text-lg'>{idCategory?<>Categoría: {idCategory}</>:<></>}</h1>
      
        <div className='grid gap-8 grid-cols-4 w-full max-w-screen-lg'>
            {
            items?.map(item => (
              <ItemDetailContainer key={item.id} data={item}/>
            )) 
          }
        </div>
      </>
    );
  }
  
  export default ItemListContainer;
