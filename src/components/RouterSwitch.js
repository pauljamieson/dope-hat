import { Box } from "@material-ui/core";
import React from "react";
import { Switch, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CreateProject from "./CreateProject";
import Login from "./Login";
import Profile from "./Profile";
import Signup from "./Signup";

const RouterSwitch = (props) => {
  const location = useLocation();
  return (
    <Switch>
      <Route exact path="/">
        <Box>Home</Box>
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
        <div>test</div>
      </Route>

      <Route path="*">
        <Box>Error: 404 - Nothing found at {location.pathname}</Box>
      </Route>
    </Switch>
  );
};

export default RouterSwitch;
