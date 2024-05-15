import { AnyAction } from "redux-saga";


type Aline = {
    fly: boolean
}

type Human = {
    speak: () => {}
}

function isHuman(entity: Aline | Human): entity is Human {
    return (entity as Human).speak !== undefined
}

const Ilyass

if(isHuman(Ilyass)) {
    Ilyass.speak()
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
