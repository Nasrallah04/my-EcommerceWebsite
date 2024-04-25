import {CATEGORIES_ACTION_TYPES} from './categorie.types';
import createAction from '../../utils/reducer/reducer.utils';
import {getCategoriesAndDocuments} from '../../utils/firebase/firebase';

//for the action that returns a function we need to use redux-thunk

export const fetchCategoriesStart = () => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
}

export const fetchCategoriesSuccess = (categoriesArray) => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray)
}

export const fetchCategoriesFailure = (error) => {
   return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILURE, error)
}

//Here we are using redux-thunk to return a function instead of an object
//here our logic is to fetch the categories from the firebase and then dispatch the success or failure action
export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
        const categoriesArray = await getCategoriesAndDocuments('categories');
        dispatch(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        dispatch(fetchCategoriesFailure(error))
    }
}