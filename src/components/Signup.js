import {
  makeStyles,
  TextField,
  Grid,
  Button,
  Container,
  Paper,
  Box,
} from "@material-ui/core";
import { FilterNone } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  TextField: {
    border: "1px solid white",
    color: "white",
  },
  paper: {
    textAlign: "center",
  },
}));

const Signup = (props) => {
  const classes = useStyles();
  return (
    <Box marginTop="10px">
      <Container maxWidth="sm">
        <form>
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item xs={12} sm={6}>
              <Box className={classes.paper}>
                <TextField id="username" label="Username" variant="outlined" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box className={classes.paper}>
                <TextField
                  id="display-name"
                  label="Display Name"
                  variant="outlined"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box className={classes.paper}>
                <TextField
                  id="password-1"
                  label="Password"
                  variant="outlined"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box className={classes.paper}>
                <TextField
                  id="password-2"
                  label="Confirm Password"
                  variant="outlined"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box className={classes.paper}>
                <TextField
                  id="email"
                  label="Email Addresss"
                  variant="outlined"
                />
              </Box>
            </Grid>
            <Grid item sm={12}>
              <Box className={classes.paper}>
                <Button variant="outlined">Submit</Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default Signup;
