import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/categorie.reducer";

const rootReducer = combineReducers({
    // Add reducers here
    user: userReducer,
    categories: categoriesReducer,
    });

export default rootReducer;