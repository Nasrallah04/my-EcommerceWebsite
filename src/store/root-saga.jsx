import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "./categories/categorie.saga"
import {userSaga} from "./user/user.saga"

export default function* rootSaga() {
    yield all([call(categoriesSaga), call(userSaga)]);
}