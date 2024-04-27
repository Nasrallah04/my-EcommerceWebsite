import {all, call, takeLatest, put} from 'redux-saga/effects';
import { USER_ACTION_TYPES } from './user.types';
import {signInSuccess, signInFailed} from './user.action';
import {getCurrentUser, createUserDocumentFromAuth} from '../../utils/firebase/firebase';

export function* getSnapShotFromUserAuth (userAuth, additionalDetails) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails)
        // this is only for firebase because in order to have the id we need to call the snapshot.id
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
    }
    catch (error) {
        yield put(signInFailed(error))
        console.log('error', error)
    }
} 

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser)
        if (!userAuth) return;
        yield call(getSnapShotFromUserAuth, userAuth)
    } 
    catch (error) {
        yield put(signInFailed(error))
    }
}


export function* checkUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}


export function* userSaga (){
    yield all([call(checkUserSession)])
}