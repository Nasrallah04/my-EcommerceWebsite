import { AnyAction } from "redux-saga";

type Machable<AC extends () => AnyAction> =AC & {
    type: ReturnType<AC>['type'],
    match(action: AnyAction): action is ReturnType<AC>
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
