import { all, call } from "redux-saga/effects";
import { onFetchCategories } from "./categories/categorie.saga"

export default function* rootSaga() {
    yield all([call(onFetchCategories)]);
}