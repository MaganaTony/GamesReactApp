import gameReducer from "./reducers/gameReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
    gameReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));