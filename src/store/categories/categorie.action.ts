import {CATEGORIES_ACTION_TYPES, Category} from './categorie.types';
import {createAction, ActionType, ActionTypeWithPayload} from '../../utils/reducer/reducer.utils';



export type FetchCategoriesStart = ActionType<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>
export type FetchCategoriesSuccess = ActionTypeWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>
export type FetchCategoriesFailure = ActionTypeWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILURE, Error>


export type CategoryAction = FetchCategoriesStart | FetchCategoriesSuccess | FetchCategoriesFailure
 

export const fetchCategoriesStart = (): FetchCategoriesStart => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
}

export const fetchCategoriesSuccess = (categoriesArray: Category[]) : FetchCategoriesSuccess => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray)
}

export const fetchCategoriesFailure = (error: Error): FetchCategoriesFailure => {
   return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILURE, error)
}

