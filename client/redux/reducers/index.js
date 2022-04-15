import { combineReducers, applyMiddleware, createStore } from "redux";
import userReducer from "./userReducer";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


const middleware = [thunk];

const rootReducer = combineReducers({
    userReducer,
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => store;


export const wrapper = createWrapper(makeStore)