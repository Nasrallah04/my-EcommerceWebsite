import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/categorie.reducer";
import { cartReducer } from "./cart/cart.reducer";

const rootReducer = combineReducers({
    // Add reducers here
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer
    });

export default rootReducer;