import { Box } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { setSnackbar } from "../action";
import CreateProject from "./CreateProject";
import MySnackbar from "./custom/MySnackbar";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import Project from "./Project";
import Signup from "./Signup";

const RouterSwitch = (props) => {
  const location = useLocation();
  const snackbar = useSelector((state) => state.snackbar);
  const dispatch = useDispatch();

  return (
    <Box>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/project/create">
          <CreateProject />
        </Route>
        <Route path="/project/:id">
          <Project />
        </Route>

        <Route path="*">
          <Box>Error: 404 - Nothing found at {location.pathname}</Box>
        </Route>
      </Switch>
      <MySnackbar
        open={snackbar.open}
        message={snackbar.message}
        onClose={() => dispatch(setSnackbar(false, "", ""))}
      />
    </Box>
  );
};

export default RouterSwitch;
