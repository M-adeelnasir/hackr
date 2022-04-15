import { combineReducers, applyMiddleware, createStore } from "redux";
import userReducer from "./userReducer";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


const middleware = [thunk];
const initialState = {}

const rootReducer = combineReducers({
    user: userReducer,
})

export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => store;


export const wrapper = createWrapper(makeStore)