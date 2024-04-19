// card.context.jsx
import { createContext, useReducer, useState, useEffect } from "react";

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
  isCardOpen: true,
  cartItems: [],
  cartCount: 0,
  cartTotal:0
};



const cartReducer = (state, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'SET_CART_ITEMS':
      return{
        ...state,
        ...payload
      }
      
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
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const {isCardOpen, cartItems, cartCount, cartTotal} = state;
  const updateCartItemsReducer = (newCartItems) => {
      // generate newCartTotal
      const newCartTotal = newCartItems.reduce((total, cartItem) => 
      total + cartItem.quantity* cartItem.price, 0
    );
     // generate newCartCount
      const newCartCount = newCartItems.reduce((total, cartItem) => 
      total + cartItem.quantity, 0
      );
      // dispatch new action with payload{newCartItems,newCartCount,newCartTotal}
      dispatch({
        type: 'SET_CART_ITEMS',
        payload: {
          cartItems: newCartItems,
          cartCount: newCartCount,
          cartTotal: newCartTotal
        }
      })
  }

  const addItemTocard = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems)
  };

  const removeItemToCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems)
  };

  const clearItemFromcard = (productItemToClear) => {
    const newCartItems = clearCartItem(cartItems, productItemToClear);
    updateCartItemsReducer(newCartItems)
  };
  


  const value = {
    isCardOpen,
    setIsCardOpen: () => {},
    addItemTocard,
    removeItemToCart,
    clearItemFromcard,
    cartItems,
    cartCount,
    cartTotal 
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
