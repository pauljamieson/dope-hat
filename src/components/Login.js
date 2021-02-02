import { Grid, Box, Container, Typography, Link } from "@material-ui/core";
import React, { useState } from "react";
import MyButton from "./MyButton";
import MyOutlinedField from "./MyOutlinedField";
import { useHistory } from "react-router-dom";
import { login } from "../helpers/WebApi";

const Login = (props) => {
  const history = useHistory();
  const [loginErr, setLoginErr] = useState({ isErr: false, msg: "" });
  if (localStorage.getItem("session_id")) history.push("/");

  const signupClickHandler = (e) => {
    e.preventDefault();
    history.push("/signup");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    login(username.value, password.value).then((resp) => {
      if (resp.status === "success")
        if (resp.login) {
          localStorage.setItem("session_id", resp.session_id);
          localStorage.setItem("username", username);
          history.push("/");
        } else {
          setLoginErr({
            isErr: true,
            msg: "Username and password do not match, please try again.",
          });
          setTimeout(() => {
            setLoginErr({ isErr: false, msg: "" });
          }, 3000);
        }
    });
  };

  return (
    <Box marginTop="10px">
      <Container maxWidth="sm">
        <form onSubmit={onSubmit}>
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item xs={12} sm={6}>
              <Box textAlign="center">
                <MyOutlinedField id="username" label="username" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box textAlign="center">
                <MyOutlinedField
                  type="password"
                  id="password"
                  label="password"
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box textAlign="center">
                <MyButton type="submit">Login</MyButton>
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
        <Box textAlign="center">
          {loginErr.isErr ? (
            <Typography color="textSecondary" variant="body2">
              {loginErr.msg}
            </Typography>
          ) : (
            ""
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
