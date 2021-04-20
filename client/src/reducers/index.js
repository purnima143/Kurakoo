import authReducer from "./auth.reducers";
//import userReducer from "./user.reducers";

const rootReducer = combineReducers({
    auth: authReducer,
    //user: userReducer
});

export default rootReducer;