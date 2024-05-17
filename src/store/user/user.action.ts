import { USER_ACTION_TYPES } from './user.types';
import {createAction, withMacher, ActionTypeWithPayload, ActionType} from '../../utils/reducer/reducer.utils';
import { UserData , AdditionalInformation } from '../../utils/firebase/firebase';

//Action type for user:
export type SetCurrentUser = ActionTypeWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, UserData>
export type CheckUserSession = ActionType<USER_ACTION_TYPES.CHECK_USER_SESSION>
export type GoogleSignInStart = ActionType<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>
export type EmailSignInStart = ActionTypeWithPayload<USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {email: string, password: string}>
export type SignInSuccess = ActionTypeWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, UserData>
export type SignInFailed = ActionTypeWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILED,Error>


export const setCurrentUser = withMacher((user: UserData) : SetCurrentUser => {
   return createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user)
  })

export const checkUserSession = withMacher(() : CheckUserSession => {
  return createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)
})

// Sign In
export const googleSignInStart = withMacher(() : GoogleSignInStart => {
  return createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)
})

export const emailSignInStart = withMacher((email: string, password: string): EmailSignInStart => {
   return createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {email, password})
 })

export const signInSuccess = withMacher((user: UserData): SignInSuccess => {
   return createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)
})

export const signInFailed = withMacher((error: Error): SignInFailed => {
   return createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)
})

export type SignUpStart = ActionTypeWithPayload<USER_ACTION_TYPES.SIGN_UP_START, {email: string, password: string, displayName: string}> 
export type SignUpSuccess = ActionTypeWithPayload<USER_ACTION_TYPES.SIGN_UP_SUCCESS, {userAuth: UserData, additionalInformation: AdditionalInformation}>
export type SignUnFailed = ActionTypeWithPayload<USER_ACTION_TYPES.SIGN_UP_FAILED, Error>
// Sign Up
export const signUpStart = withMacher((email: string, password: string, displayName: string): SignUpStart => {
  return createAction(USER_ACTION_TYPES.SIGN_UP_START, {email, password, displayName})
})

export const signUpSuccess = withMacher((userAuth: UserData, additionalInformation: AdditionalInformation): SignUpSuccess => {
  return createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {userAuth, additionalInformation})
})

export const signUnFailed = withMacher((error: Error) : SignUnFailed => {
  return createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error)
})

// Sign Out

export type SignOutStart = ActionType<USER_ACTION_TYPES.SIGN_OUT_START>
export type SignOutSuccess = ActionType<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>
export type SignOutFailed = ActionTypeWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAILED, Error>

export const signOutStart = withMacher(() : SignOutStart => {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_START)
})

export const signOutSuccess = withMacher((): SignOutSuccess => {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)
})

export const signOutFailed = withMacher((error: Error): SignOutFailed => {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error)
})