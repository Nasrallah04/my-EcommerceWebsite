import { AnyAction } from "redux-saga";

export type ActionTypeWithPayload<T, P> = {
    type: T,
    payload: P
}

export type ActionType<T> = {
    type: T 
}



export function createAction<T extends string, P>(type: T, payload: P) : ActionTypeWithPayload<T, P>

export function createAction<T extends string>(type: T, payload: void) : ActionType<T>


export function createAction<T extends string, P>(type: T, payload: P) {
    return {type, payload}
}
