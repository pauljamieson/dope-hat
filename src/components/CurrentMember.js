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
import { useDispatch, useSelector } from "react-redux";
import { getUserById, removeProjectMembers } from "../helpers/WebApi";
import { setProjectLeaders, setProjectMembers } from "../action";

const useStyles = makeStyles({
  dialog: {
    backgroundColor: "#2a2a2a",
  },
  chip: {
    backgroundColor: "#4a4a4a",
    color: theme.palette.text.primary,
  },
  listitem: {
    backgroundColor: "#3a3a3a",
  },
});

const CurrentMember = (props) => {
  const { type, _id } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const members = useSelector((state) =>
    type === 1 ? state.projectLeaders.members : state.projectMembers.members
  );
  const projectData = useSelector((state) => state.projectData);
  const [open, setOpen] = useState(false);
  const [member, setMember] = useState({ display_name: "" });

  useEffect(() => {
    getUserById(_id).then((user) => {
      setMember(user);
    });
  }, [_id]);

  const handleOpenClick = () => {
    if (projectData.isLeader && user._id !== _id) setOpen(!open);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMembers = members.filter((id) => id != member.id);
    removeProjectMembers(projectData._id, type, newMembers).then((resp) => {
      if (resp.status === "success")
        dispatch(
          type === 1
            ? setProjectLeaders(resp.members, projectData._id)
            : setProjectMembers(resp.members, projectData._id)
        );
    });
    setOpen(!open);
  };

  return (
    <div>
      <ListItem
        className={classes.listitem}
        divider
        button
        onClick={handleOpenClick}
      >
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
        <DialogContent>
          <DialogContentText>
            Do you want to remove {member.display_name} from this project?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <MyButton onClick={handleOpenClick}>Cancel</MyButton>
          <MyButton onClick={handleSubmit}>Remove</MyButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CurrentMember;
