import { ActionType, ActionTypeWithPayload , withMacher } from '../../utils/reducer/reducer.utils';

import { CategoryItem } from '../categories/categorie.types';
import { CartItem } from './cart.types';
import { CART_ACTION_TYPES } from './cart.types';
import {createAction} from '../../utils/reducer/reducer.utils';

const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
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
  
const removeCartItem = (cartItems: CartItem[], cartItemToRemove:CartItem): CartItem[] => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToRemove.id
    );
  
    // check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem && existingCartItem.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }
  
    // return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };
  
const clearCartItem = (cartItems: CartItem[], productItemToClear: CartItem): CartItem[] => cartItems.filter((cartItem) => cartItem.id !== productItemToClear.id);
  
//Types:
export type SetIsCartOpen = ActionTypeWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>
export type SetCartItems = ActionTypeWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>


export const setCartItems = withMacher((cartItems: CartItem[]): SetCartItems => 
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
) 

export const addItemTocard = withMacher((cartItems: CartItem[] , productToAdd: CategoryItem) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return setCartItems(newCartItems)
  });

export const removeItemFromCart = withMacher((cartItems: CartItem[] , cartItemToRemove:CartItem) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return setCartItems(newCartItems)
  });

export const clearItemFromcard = withMacher((cartItems: CartItem[] , productItemToClear:CartItem) => {
    const newCartItems = clearCartItem(cartItems, productItemToClear);
    return setCartItems(newCartItems)
  });

export const setIsCartOpen = withMacher((boolean: boolean): SetIsCartOpen =>  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean));