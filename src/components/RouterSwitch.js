import { Box } from "@material-ui/core";
import React from "react";
import { Switch, Route } from "react-router-dom";

const RouterSwitch = (props) => {
  return (
    <Switch>
      <Route exact path="/">
        <Box>Home</Box>
      </Route>
      <Route exact path="/login">
        <Box>Login</Box>
      </Route>
      <Route exact path="/signup">
        <Box>Signup</Box>
      </Route>
      <Route path="*">
        <Box>Error: 404 - url not found</Box>
      </Route>
    </Switch>
  );
};

export default RouterSwitch;
