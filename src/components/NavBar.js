import {
  Box,
  AppBar,
  Button,
  Toolbar,
  Typography,
  Select,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
  const displayName = useSelector((state) => state.user.display_name);

  const [projectName, setProjectName] = useState("None");

  const projectSelectHandler = (e) => {
    setProjectName(e.target.value);
  };

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

  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h5">
            Dope Hat
          </Typography>
          {isLogged ? (
            <div>
              <Button onClick={createClickHandler} variant="outlined">
                New Project
              </Button>
              <Button onClick={profileClickHandler} variant="outlined">
                {displayName}
              </Button>
            </div>
          ) : (
            <Button onClick={loginClickHandler} variant="outlined">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
