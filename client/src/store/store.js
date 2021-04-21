import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// Combine 'root' reducer
const rootReducer = combineReducers({
    // Add reducers
});

// Initial state
const initialState = {};

// Middleware for handling async function
const middleware = [thunk];

// Store
const store = createStore(
    rootReducer,
    initialState,
    // Dev tools for viewing redux state and changes in chrome
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
