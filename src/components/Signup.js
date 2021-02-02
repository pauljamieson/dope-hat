import { Grid, Container, Box, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { signup } from "../helpers/WebApi";
import MyButton from "./MyButton";
import MyOutlinedField from "./MyOutlinedField";

const Signup = (props) => {
  const history = useHistory();
  const [passErr, setPassErr] = useState({ isErr: false, msg: "" });
  const [signupErr, setSignupErr] = useState({ isErr: false, msg: [String] });

  const onSubmit = (e) => {
    const { username, password_1, password_2, display_name, email } = e.target;
    e.preventDefault();
    if (passErr.isErr) {
      setPassErr({ isErr: false, msg: "" });
    }
    if (signupErr.isErr) {
      setSignupErr({ isErr: false, reason: [] });
    }
    if (password_1.value.length < 8)
      setPassErr({ isErr: true, msg: "Password must be 8 characters longs." });
    else if (password_1.value !== password_2.value) {
      setPassErr({ isErr: true, msg: "Passwords do not match." });
    } else {
      signup(
        username.value,
        display_name.value,
        password_1.value,
        email.value
      ).then((resp) => {
        resp.status === "success"
          ? history.push("/login")
          : setSignupErr({ isErr: true, msg: resp.reason });
      });
    }
    setTimeout(() => {
      setPassErr({ isErr: false, msg: "" });
      setSignupErr({ isErr: false, msg: "" });
    }, 3000);
  };

  return (
    <Box marginTop="10px">
      <Container maxWidth="sm">
        <form onSubmit={onSubmit}>
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item xs={12} sm={6}>
              <Box textAlign="center">
                <MyOutlinedField required id="username" label="Username" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box textAlign="center">
                <MyOutlinedField
                  required
                  id="display_name"
                  label="Display Name"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box textAlign="center">
                <MyOutlinedField
                  required
                  type="password"
                  id="password_1"
                  label="Password"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box textAlign="center">
                <MyOutlinedField
                  required
                  type="password"
                  id="password_2"
                  label="Confirm Password"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box textAlign="center">
                <MyOutlinedField required id="email" label="Email Addresss" />
              </Box>
            </Grid>
            <Grid item sm={12}>
              <Box textAlign="center">
                <MyButton type="submit">Submit</MyButton>
              </Box>
            </Grid>
            <Grid item sm={12}>
              <Box textAlign="center">
                {passErr.isErr ? (
                  <Typography color="textSecondary" variant="body2">
                    {passErr.msg}
                  </Typography>
                ) : signupErr.isErr ? (
                  signupErr.msg.map((msg) => (
                    <Typography color="textSecondary" variant="body2">
                      {msg}
                    </Typography>
                  ))
                ) : (
                  ""
                )}
              </Box>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default Signup;
