import { combineReducers } from "redux";
import { SongReducer } from "./SongReducer";
import { configureStore } from "@reduxjs/toolkit";
import { CatReducer } from "./CatReducer";

//npm install @reduxjs/toolkit

//which reducer should i use
const reducers = combineReducers({songs: SongReducer, categories:CatReducer});

//combine all reducers to one single store....
export const youtube = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleWare)=>
    getDefaultMiddleWare({serializableCheck:false}) //do not look on serialization errors
});
//middleware => התערבות מרגע הכנת המידע ועד להצגה שלו
