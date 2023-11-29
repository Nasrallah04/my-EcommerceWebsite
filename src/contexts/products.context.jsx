import { createContext, useState, useEffect } from "react";

import {getCategoriesAndDocuments} from '../utils/firebase/firebase'

// import SHOP_DATA from "../shop-data.js";

export const ProductsContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  // You can import the shop data from the external file

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const getCategorieMap = async () => {
      const categorieMap = await getCategoriesAndDocuments()
      console.log(categorieMap)
    }
    getCategorieMap()
  }
  , []); 
  
  const value = { products};
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
