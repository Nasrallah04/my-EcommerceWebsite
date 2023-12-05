import { useContext } from "react";
import "./cart-icon.styles.scss";
import { BsBag } from "react-icons/bs";

import { CartContext } from "../../contexts/card.context";



const CartIcon = () => {
    const {isCardOpen ,setIsCardOpen, cartCount} = useContext(CartContext);
    const toggelIsCardOpen = () =>setIsCardOpen(!isCardOpen)
  return (
    <div className="cart-icon-container" onClick={toggelIsCardOpen}>
      <BsBag className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
