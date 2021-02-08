import { combineReducers } from "redux";
import userReducer from "./user";
import loggedReducer from "./logged"

const allReducers = combineReducers({
  user: userReducer,
  isLogged: loggedReducer
});

export default allReducers;
