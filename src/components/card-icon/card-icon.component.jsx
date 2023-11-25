import { useContext } from "react";
import "./card-icon.styles.scss";
import { BsBag } from "react-icons/bs";

import { CartContext } from "../../contexts/card.context";



const CardIcon = () => {
    const {isCardOpen ,setIsCardOpen, cartCount} = useContext(CartContext);
    const toggelIsCardOpen = () =>setIsCardOpen(!isCardOpen)
  return (
    <div className="cart-icon-container" onClick={toggelIsCardOpen}>
      <BsBag className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CardIcon;
