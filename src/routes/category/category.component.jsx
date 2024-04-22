import {useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { categoriesMapSelctor } from '../../store/categories/categorie.selector';

import ProductCard from '../../components/product-card/product-card.component';


import { CategoryContainer, Title } from './category.styles';

const Category = () => {
  const { category } = useParams();
  console.log("render/re-render Category component")
  const categoriesMap = useSelector(categoriesMapSelctor);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    console.log("useEffect Category component")
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;