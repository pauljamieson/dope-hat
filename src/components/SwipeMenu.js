import {
  Box,
  Grid,
  makeStyles,
  SwipeableDrawer,
  Typography,
} from "@material-ui/core";
import { isMobile } from "react-device-detect";
import React from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { useHistory, Switch, Route } from "react-router";
import MyButton from "./custom/MyButton";
import { loggedOut, clearUser } from "../action";

const useStyles = makeStyles({
  menu: {
    backgroundColor: "#1a1a2a",
  },
  menuButtons: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});

const SwipeMenu = (props) => {
  const { setOpenMenu, openMenu } = props;
  const isLogged = useSelector((state) => state.isLogged);
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();

  const loginClickHandler = (e) => {
    e.preventDefault();
    setOpenMenu(false);
    history.push("/login");
  };

  const profileClickHandler = (e) => {
    e.preventDefault();
    setOpenMenu(false);
    history.push("/profile");
  };

  const createClickHandler = (e) => {
    e.preventDefault();
    setOpenMenu(false);
    history.push("/project/create");
  };

  const logoutClickHandler = (e) => {
    batch(() => {
      dispatch(loggedOut());
      dispatch(clearUser());
    });
    setOpenMenu(false);
    localStorage.removeItem("session");
    history.push("/");
  };

  return (
    <SwipeableDrawer
      PaperProps={{ className: classes.menu }}
      anchor="right"
      open={openMenu}
      onOpen={() => setOpenMenu(true)}
      onClose={() => setOpenMenu(false)}
    >
      <Box width={250} padding={0.5} marginTop={isMobile ? "auto" : 0}>
        <Grid container direction={isMobile ? "column" : "column-reverse"}>
          <Grid item xs={12}>
            <Box display={isLogged ? "" : "none"}>
              <MyButton
                size="large"
                fullWidth
                onClick={createClickHandler}
                variant="outlined"
              >
                New Project
              </MyButton>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display={isLogged ? "" : "none"}>
              <MyButton
                size="large"
                fullWidth
                onClick={profileClickHandler}
                variant="outlined"
              >
                Profile
              </MyButton>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display={isLogged ? "none" : ""}>
              <MyButton
                size="large"
                fullWidth
                onClick={loginClickHandler}
                variant="outlined"
              >
                Login
              </MyButton>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <MyButton size="large" fullWidth onClick={() => setOpenMenu(false)}>
              Close Menu
            </MyButton>
          </Grid>
          <Switch>
            <Route path="/profile">
              <Grid
                container
                direction="column"
              >
                <Grid item xs={12}>
                  <Typography color="textSecondary" align="center" variant="h6">
                    Profile
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <MyButton size="large" fullWidth onClick={logoutClickHandler}>
                    Logout
                  </MyButton>
                </Grid>
              </Grid>
            </Route>
          </Switch>
        </Grid>
      </Box>
    </SwipeableDrawer>
  );
};

export default SwipeMenu;
