import { combineReducers } from "redux";
import userReducer from "./user";
import loggedReducer from "./logged";
import projectDataReducer from "./projectData";
import projectLeadersReducer from "./projectLeaders";
import projectMembersReducer from "./projectMembers";
import snackbarReducer from "./snackbar";

const allReducers = combineReducers({
  user: userReducer,
  isLogged: loggedReducer,
  projectData: projectDataReducer,
  projectLeaders: projectLeadersReducer,
  projectMembers: projectMembersReducer,
  snackbar: snackbarReducer,
});

export default allReducers;
