import { Box, AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
      flexGrow: 1,
      color: theme.palette.text.primary
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <AppBar  position="static">
        <Toolbar >
          <Typography className={classes.title} variant="h5">
            Dope Hat
          </Typography>
          <Button>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
