import { createSelector } from 'reselect';

import {CategoriesState} from './categorie.reducer'
import { CategoryMap } from './categorie.types';
import { RootState } from '../store';
// Memorization:
// is the process when we cache the result of the previous value and if the input is the same we return the cached value
const selectCategoryReducer = (state:RootState) : CategoriesState => state.categories;


export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) =>categoriesSlice.categories
);



export const categoriesMapSelctor = createSelector(
  [selectCategories],
  (categories) : CategoryMap => categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
  
)

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) =>categoriesSlice.isLoading
)
// here where you do the transformation logic to get the data in the format you want
