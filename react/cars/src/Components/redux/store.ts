//npm install @reduxjs/toolkit

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./AuthRedicer";

const reducers = combineReducers({auth:AuthReducer});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleWare)=>getDefaultMiddleWare({serializableCheck:false}),
});