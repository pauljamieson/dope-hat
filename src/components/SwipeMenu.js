import {
  Box,
  makeStyles,
  SwipeableDrawer,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import MyButton from "./custom/MyButton";

const useStyles = makeStyles({
  menu: {
    backgroundColor: "#1a1a2a",
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
      <MyButton onClick={() => setOpenMenu(false)}>Close Menu</MyButton>
      {isLogged ? (
        <Box>
          <MyButton onClick={createClickHandler} variant="outlined">
            New Project
          </MyButton>
          <MyButton onClick={profileClickHandler} variant="outlined">
            Profile
          </MyButton>
        </Box>
      ) : (
        <MyButton onClick={loginClickHandler} variant="outlined">
          Login
        </MyButton>
      )}
      <Box maxWidth={200} marginTop="auto" textAlign="center">
        <Typography variant="body2">
          Swipe from right edge on mobile devices to open menu.
        </Typography>
      </Box>
    </SwipeableDrawer>
  );
};

export default SwipeMenu;
