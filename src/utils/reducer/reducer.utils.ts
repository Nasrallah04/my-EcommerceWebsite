import { AnyAction } from "redux-saga";

type Machable<AC extends () => AnyAction> =AC & {
    type: ReturnType<AC>['type'],
    match(action: AnyAction): action is ReturnType<AC>
}

export function withMacher<AC extends () => AnyAction & { type: string}>(actionCreator: AC): Machable<AC>;

export function withMacher<AC extends (...args: any[]) => AnyAction & { type: string}>(actionCreator: AC): Machable<AC>

export function withMacher(actionCreator: Function){
    const type = actionCreator().type
    return Object.assign( actionCreator,{
        type,
        match(action: AnyAction){
            return action.type === type;
        }
    }

    )
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
