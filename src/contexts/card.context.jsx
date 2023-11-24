// card.context.jsx
import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCardOpen: false,
  setIsCardOpen: () => {},
  cartItems: [], // <-- Corrected the property name
  addItemTocard: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]); // <-- Corrected the variable name

  const addItemTocard = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCardOpen, setIsCardOpen, addItemTocard, cartItems }; // <-- Corrected the property name

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
