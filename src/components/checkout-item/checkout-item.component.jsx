import { useDispatch, useSelector } from "react-redux"
import { memo } from "react";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemTocard, removeItemFromCart, clearItemFromcard } from "../../store/cart/cart.action";
import {
  CheckoutItemContainer,
  ImageContainer,
  NameContainer,
  PriceContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from "./choukout-item.styles";
const CheckoutItem = memo(({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  //handlers
  const addItem = () => dispatch(addItemTocard(cartItems,cartItem));
  const subItem = () => dispatch(removeItemFromCart(cartItems,cartItem));
  const clearItemHandler = () => dispatch(clearItemFromcard(cartItems,cartItem));

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
      <PriceContainer>{price} MAD</PriceContainer>
      <RemoveButtonContainer onClick={() => clearItemHandler()}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
});

export default CheckoutItem;
