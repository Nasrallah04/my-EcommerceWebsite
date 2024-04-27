import {all, call, takeLatest, put} from 'redux-saga/effects';
import { USER_ACTION_TYPES } from './user.types';
import {signInSuccess, signInFailed} from './user.action';
import {getCurrentUser} from '../../utils/firebase/firebase';


export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser)
        if (!userAuth) return;
    } catch (error) {
        yield put(signInFailed(error))
    }
}


export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}


export function* userSaga (){
    yield all([call()])
}