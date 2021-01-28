import { Grid, Box, Container, Typography, Link } from "@material-ui/core";
import React from "react";
import MyButton from "./MyButton";
import MyOutlinedField from "./MyOutlinedField";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const history = useHistory();

  const signupClickHandler = (e) => {
    e.preventDefault();
    history.push("/signup");
  };
  return (
    <Box marginTop="10px">
      <Container maxWidth="sm">
        <form>
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item xs={12} sm={6}>
              <Box textAlign="center">
                <MyOutlinedField id="username" label="username" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box textAlign="center">
                <MyOutlinedField id="password" label="password" />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box textAlign="center">
                <MyButton>Login</MyButton>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box textAlign="center">
                <Typography variant="body1" color="textPrimary">
                  <Link onClick={signupClickHandler} color="textSecondary">
                    Signup
                  </Link>{" "}
                  if you don't have an account.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default Login;
