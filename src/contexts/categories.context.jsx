import { createContext, useState, useEffect } from "react";

import {getCategoriesAndDocuments} from '../utils/firebase/firebase'

// import SHOP_DATA from "../shop-data.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  // You can import the shop data from the external file

  const [categoriesMap, setCategoriesMap] = useState({});
  
  useEffect(() => {
    const getCategorieMap = async () => {
      const categorieMap = await getCategoriesAndDocuments()
      console.log(categorieMap)
      setCategoriesMap(categorieMap)
    }
    getCategorieMap()
  }
  , []); 
  
  const value = { categoriesMap};
  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
