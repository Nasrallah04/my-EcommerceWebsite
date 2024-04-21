import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";

const rootReducer = combineReducers({
    // Add reducers here
    user: userReducer,
    });

export default rootReducer;