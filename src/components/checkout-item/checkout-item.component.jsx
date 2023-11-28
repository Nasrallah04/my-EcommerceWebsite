import { useContext } from "react";
import { CartContext } from "../../contexts/card.context";
import "./choukout-item.styles.scss";
const CheckoutItem = ({ cartItem }) => {
  const { addItemTocard, removeItemToCart, clearItemFromcard,  } =
    useContext(CartContext);

  //handlers
  const addItem = () => addItemTocard(cartItem);
  const subItem = () => removeItemToCart(cartItem);
  const clearItemHandler = () => clearItemFromcard(cartItem);

  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => subItem()}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem()}>&#10095;</div>
      </span>
      <span className="price">{price}$</span>
      <div className="remove-button" onClick={() => clearItemHandler()}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
