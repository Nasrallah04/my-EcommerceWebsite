import { AnyAction } from "redux-saga";

import { UserData } from "../../utils/firebase/firebase";

import {signInSuccess, signOutSuccess, signInFailed, signOutFailed, signUpFailed} from './user.action'


export type UserState = {
  readonly currentUser: UserData | null,
  readonly isLoading: boolean,
  readonly error: Error | null,
}

export const USER_INITIAL_STATE : UserState = {
  currentUser: null,
  isLoading: false,
  error: new Error(''),
};

export const userReducer = (state = USER_INITIAL_STATE, action: AnyAction) : UserState => {

  if (signInSuccess.match(action)){
    return {...state, currentUser: action.payload}
  }

  if (signOutSuccess.match(action)){
    return {...state, currentUser: null}
  }

  if (signInFailed.match(action) || signOutFailed.match(action) || signUpFailed.match(action)){
    return {...state, error: action.payload}
  }

  return state
  // everysingle action needs to return a state if it does not match the type
  }
