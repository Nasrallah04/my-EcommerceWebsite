import "./card-icon.styles.scss";
import { BsBag } from "react-icons/bs";


const CardIcon = () => {
  return (
    <div className="cart-icon-container">
      <BsBag className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CardIcon;
