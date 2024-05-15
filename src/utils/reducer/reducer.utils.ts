import { AnyAction } from "redux-saga";

// intersection types
type Aline = {
    fly: boolean
}

type Human = {
    speak: () => void
}

type Hybrid = Aline & Human

const Ilyass: Hybrid = {
    fly: false,
    speak: () => {}
}

// return type of a function

type myFunc = () => boolean

type myReturn = ReturnType<myFunc>

function check (): myReturn {
    return true
}




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
