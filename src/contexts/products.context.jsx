import { createContext, useState, useEffect } from "react";
import PRODUCTS from "../shop-data";

export const ProductsContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  // You can import the shop data from the external file

  const [products, setProducts] = useState(PRODUCTS);
  const value = { products};

  useEffect(() => {
    
  }, []); 

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
