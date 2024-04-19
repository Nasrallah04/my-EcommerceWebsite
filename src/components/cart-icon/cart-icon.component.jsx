import { useContext } from "react";
import {CartIconContainer,ItemCount,ShoppingIcon} from "./cart-icon.styles";
// import { BsBag } from "react-icons/bs";

import { CartContext } from "../../contexts/card.context";



const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
