import { useContext } from 'react';
import { CartContext } from '../../contexts/card.context';
import "./product-card.styles.scss";
import Button from "../button/button.component";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const {addItemTocard} = useContext(CartContext)
  const addProductToCard = () => addItemTocard(product)
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{`${price}$`}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCard}>Add To Card</Button>
    </div>
  );
};

export default ProductCard;
