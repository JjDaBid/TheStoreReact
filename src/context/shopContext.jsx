import { createContext, useState } from "react";

export const ShopContext = createContext()

// eslint-disable-next-line react/prop-types
export const ShopComponentContext = ({ children }) => {

  // const [ quantity, setQuantity ] = useState(0);
  const [ cart, setCart ] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product])
    // setQuantity(quantity + 1)
  }

  return(
    <ShopContext.Provider value={{cart, addToCart}}>
      {children}
    </ShopContext.Provider>
  )
}
