export const categoriesMapSelctor = (state) =>
  state.categories.categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
// here where you do the transformation logic to get the data in the format you want
