import { useContext } from "react";
import { CartContext } from "../../contexts/card.context";
import {
  CheckoutItemContainer,
  ImageContainer,
  NameContainer,
  PriceContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from "./choukout-item.styles";
const CheckoutItem = ({ cartItem }) => {
  const { addItemTocard, removeItemToCart, clearItemFromcard } =
    useContext(CartContext);

  //handlers
  const addItem = () => addItemTocard(cartItem);
  const subItem = () => removeItemToCart(cartItem);
  const clearItemHandler = () => clearItemFromcard(cartItem);

  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <NameContainer>{name}</NameContainer>
      <QuantityContainer>
        <div className="arrow" onClick={() => subItem()}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem()}>
          &#10095;
        </div>
      </QuantityContainer>
      <PriceContainer>{price}$</PriceContainer>
      <RemoveButtonContainer onClick={() => clearItemHandler()}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
