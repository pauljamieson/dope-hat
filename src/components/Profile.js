import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import MyButton from "./custom/MyButton";
import UserDetails from "./UserDetails";
import ProjectList from "./ProjectList";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { clearUser, loggedOut } from "../action";

const Profile = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutClickHandler = (e) => {
    dispatch(loggedOut());
    dispatch(clearUser());
    localStorage.removeItem("session");
    history.push("/");
  };

  return (
    <Box marginTop="10px">
      <Container maxWidth="sm">
        <Grid container>
          <Grid item xs={12}>
            <UserDetails />
          </Grid>
          <Grid item xs={12}>
            <Box textAlign="center" margin={2}>
              <MyButton onClick={logoutClickHandler}>Logout</MyButton>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <ProjectList />
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Profile;
