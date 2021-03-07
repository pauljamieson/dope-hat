import React, { useEffect, useState } from "react";
import {
  ListItem,
  Box,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  makeStyles,
} from "@material-ui/core";
import MyButton from "./custom/MyButton";
import theme from "../theme";
import { useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import { getUserById } from "../helpers/WebApi";

const useStyles = makeStyles({
  dialog: {
    backgroundColor: "#2a2a2a",
  },
  chip: {
    backgroundColor: "#4a4a4a",
    color: theme.palette.text.primary,
  },
});

const CurrentMember = (props) => {
  const { type, _id } = props;
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [member, setMember] = useState({ display_name: "" });

  useEffect(() => {
    getUserById(_id).then((user) => {
      setMember(user);
    });
  }, [_id]);

  const handleOpenClick = () => {};

  const handleClickRemove = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <ListItem divider button onClick={handleOpenClick}>
        <Box textAlign="center" clone>
          <ListItemText
            primaryTypographyProps={{ color: "textPrimary" }}
            primary={member.display_name}
          ></ListItemText>
        </Box>
      </ListItem>

      <Dialog
        PaperProps={{ className: classes.dialog }}
        open={open}
        onClose={handleOpenClick}
        disableBackdropClick
      >
        <DialogTitle id="dialog-title">Remove User</DialogTitle>
        <form onSubmit={handleClickRemove}>
          <DialogContent>
            <DialogContentText>
              Do you want to remove "NAME HERE" from this project?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <MyButton onClick={handleOpenClick}>Cancel</MyButton>
            <MyButton type="submit">Remove</MyButton>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default CurrentMember;
