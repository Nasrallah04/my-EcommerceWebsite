import { useContext } from "react";
import {CartIconContainer,ItemCount,ShoppingIcon} from "./cart-icon.styles";
// import { BsBag } from "react-icons/bs";

import { CartContext } from "../../contexts/card.context";



const CartIcon = () => {
    const {isCardOpen ,setIsCardOpen, cartCount} = useContext(CartContext);
    const toggelIsCardOpen = () =>setIsCardOpen(!isCardOpen)
  return (
    <CartIconContainer onClick={toggelIsCardOpen}>
      <ShoppingIcon/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
