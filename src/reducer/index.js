import { combineReducers } from "redux";
import isLoggedReducer from "./isLogged";

const allReducers = combineReducers({ isLogged: isLoggedReducer });

export default allReducers;
