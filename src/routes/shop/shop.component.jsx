import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';
import {setCategoriesMap} from '../../store/categories/categorie.action'

import CategoriesPreview from '../categories-preview/categories-preview.component';

import Category from '../category/category.component';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories');
      // console.log(categoryMap);
      dispatch(setCategoriesMap(categoryMap));
    };
    
    getCategoriesMap();
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category/>} />
    </Routes>
  );
};

export default Shop;