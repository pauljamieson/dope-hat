import { Drawer, Box } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import MyButton from "./custom/MyButton";

const SwipeMenu = (props) => {
  const { setOpenMenu } = props;
  const isLogged = useSelector((state) => state.isLogged);
  const history = useHistory();

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
    <Drawer anchor="right" open="false">
      <MyButton onClick={() => setOpenMenu(false)}>Close Menu</MyButton>
      {isLogged ? (
        <Box>
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
      --- Placeholder Menu ---
    </Drawer>
  );
};

export default SwipeMenu;
