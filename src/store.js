import { combineReducers, createStore } from "redux";
import { AppReducer } from "./AppReducer";
import { FilterReducer } from "./FilterReducer";


const store= createStore(combineReducers({AppState:AppReducer,FilterState:FilterReducer}));

export default store;
