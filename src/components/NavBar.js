import {
  Link,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Grid,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import MyButton from "./custom/MyButton";
import { Menu } from "@material-ui/icons";
import MyIconButton from "./custom/MenuButton";
import SwipeMenu from "./SwipeMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButtons: {
    display: { xs: "none", sm: "block" },
  },
  title: {
    flexGrow: 1,
    color: theme.palette.text.primary,
  },
  select: {
    backgroundColor: "#1f1f1f",
    "&:hover": {
      backgroundColor: "#0a0a0a",
    },
    "&::selected": {
      backgroundColor: "#0a0a0a",
    },
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const isLogged = useSelector((state) => state.isLogged);
  const [openMenu, setOpenMenu] = useState(false);

  const loginClickHandler = (e) => {
    e.preventDefault();
    history.push("/login");
  };

  const profileClickHandler = (e) => {
    e.preventDefault();
    history.push("/profile");
  };

  const createClickHandler = (e) => {
    e.preventDefault();
    history.push("/project/create");
  };

  const titleClickHandler = (e) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography noWrap className={classes.title} variant="h5">
            <Link
              color="textPrimary"
              underline="none"
              onClick={titleClickHandler}
            >
              Dope Hat
            </Link>
          </Typography>
          {isLogged ? (
            <Box display={{ xs: "none", sm: "block" }}>
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

          <MyIconButton onClick={() => setOpenMenu(!openMenu)}>
            <Menu />
          </MyIconButton>
        </Toolbar>
      </AppBar>
      {openMenu && <SwipeMenu setOpenMenu={setOpenMenu} />}
    </Box>
  );
};

export default NavBar;
