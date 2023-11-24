// cart-dropdown.component.jsx
import { useContext } from "react";
import { CartContext } from "../../contexts/card.context";
import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CardItem from "../cart-item/cart-item.component";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext); // <-- Corrected the property name

  return (
    <div className="cart-dropdown-container">
      <div className="card-item">
        {cartItems.map((item) => ( // <-- Corrected the property name
          <CardItem key={item.id} cardItem={item} />
        ))}
      </div>
      <Button>Go To Checkout</Button>
    </div>
  );
};

export default CartDropDown;
