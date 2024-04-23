import { createSelector } from 'reselect';
// Memorization:
// is the process when we cache the result of the previous value and if the input is the same we return the cached value
const selectCategoryReducer = (state) => state.categories;


export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) =>categoriesSlice.categories
);



export const categoriesMapSelctor = createSelector(
  [selectCategories],
  (categories) => categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
  
)
// here where you do the transformation logic to get the data in the format you want
