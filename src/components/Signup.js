import { Grid, Button, Container, Box } from "@material-ui/core";
import React from "react";
import MyButton from "./MyButton";
import MyOutlinedField from "./MyOutlinedField";

const Signup = (props) => {
  return (
    <Box marginTop="10px">
      <Container maxWidth="sm">
        <form>
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item xs={12} sm={6}>
              <Box textAlign="center">
                <MyOutlinedField id="username" label="Username" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box textAlign="center">
                <MyOutlinedField id="display-name" label="Display Name" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box textAlign="center">
                <MyOutlinedField
                  type="password"
                  id="password-1"
                  label="Password"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box textAlign="center">
                <MyOutlinedField
                  type="password"
                  id="password-2"
                  label="Confirm Password"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box textAlign="center">
                <MyOutlinedField id="email" label="Email Addresss" />
              </Box>
            </Grid>
            <Grid item sm={12}>
              <Box textAlign="center">
                <MyButton>Submit</MyButton>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default Signup;
