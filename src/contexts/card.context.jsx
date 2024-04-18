// card.context.jsx
import { createContext, useState, useEffect } from "react";


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

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, productItemToClear) => cartItems.filter((cartItem) => cartItem.id !== productItemToClear.id);

export const INITIAL_STATE = {
  isCardOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal:0
};



const CartReducer = (state, action) => {
  const {type, payload} = action;
  switch (key) {
    case value:
      
      break;
  
    default:
      throw new Error(`Unhandled type of: ${type} in CartReducer`);
  }

}


export const CartContext = createContext({
  isCardOpen: false,
  setIsCardOpen: () => {},
  cartItems: [],
  addItemTocard: () => {},
  removeItemToCart: () => {},
  clearItemFromcard: () => {},
  cartCount: 0,
  cartTotal:0
});

export const CartProvider = ({ children }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => 
      total + cartItem.quantity, 0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => 
      total + cartItem.quantity* cartItem.price, 0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const updateCartItemsReducer = (newCartItems) {
    /*
      generate newCartTotal

      generate newCartCount

      
      dispatch new action with payload{
        newCartItems,
        newCartCount,
        newCartTotal
      }
    */
  }

  const addItemTocard = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromcard = (productItemToClear) => {
    setCartItems(clearCartItem(cartItems, productItemToClear));
  };
  


  const value = {
    isCardOpen,
    setIsCardOpen,
    addItemTocard,
    removeItemToCart,
    clearItemFromcard,
    cartItems,
    cartCount,
    cartTotal 
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
