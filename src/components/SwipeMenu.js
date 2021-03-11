import { Box, Grid, makeStyles, SwipeableDrawer } from "@material-ui/core";
import { isMobile } from "react-device-detect";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import MyButton from "./custom/MyButton";

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

  return (
    <SwipeableDrawer
      PaperProps={{ className: classes.menu }}
      anchor="right"
      open={openMenu}
      onOpen={() => setOpenMenu(true)}
      onClose={() => setOpenMenu(false)}
    >
      <Box width={250} marginTop={isMobile ? "auto" : 0}>
        <Grid container alignItems="flex-end" justify="flex-end">
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
        </Grid>
      </Box>
    </SwipeableDrawer>
  );
};

export default SwipeMenu;
