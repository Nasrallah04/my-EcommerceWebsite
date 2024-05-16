import { AnyAction } from "redux-saga";

import { CartItem } from './cart.types';
import { setCartItems, setIsCartOpen } from './cart.action'


export type CartInitialState = {
  readonly isCartOpen: boolean,
  readonly cartItems: CartItem[],
}

export const INITIAL_STATE: CartInitialState = {
    isCartOpen: false,
    cartItems: [],
  };


export const cartReducer = (state = INITIAL_STATE, action = {} as AnyAction) : CartInitialState => {
    
    if(setCartItems.match(action)){
      return {...state, cartItems: action.payload}
    }

    if(setIsCartOpen.match(action)){
      return {...state, isCartOpen:action.payload}
    }

    return state;
  }


