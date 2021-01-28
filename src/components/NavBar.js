import { Box, AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useHistory } from "react-router-dom";

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
}));

const NavBar = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const loginClickHandler = (e) => {
    e.preventDefault();
    history.push("/login");
  };

  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h5">
            Dope Hat
          </Typography>
          <Button onClick={loginClickHandler} variant="outlined">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
