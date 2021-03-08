import React, { useEffect, useState } from "react";
import {
  ListItem,
  Box,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  TextField,
  DialogActions,
  makeStyles,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { addProjectMembers, getAllDisplayNames } from "../helpers/WebApi";
import MyButton from "./custom/MyButton";
import theme from "../theme";
import { useSelector, useDispatch } from "react-redux";
import { setProjectLeaders, setProjectMembers } from "../action";

const useStyles = makeStyles({
  dialog: {
    backgroundColor: "#2a2a2a",
  },
  chip: {
    backgroundColor: "#4a4a4a",
    color: theme.palette.text.primary,
  },
});

const AddMembers = (props) => {
  const { type } = props;
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState(["loading..."]);
  const [values, setValues] = useState([]);
  const dispatch = useDispatch();
  const classes = useStyles();
  const members = useSelector((state) =>
    type === 1 ? state.projectLeaders.members : state.projectMembers.members
  );
  const projectData = useSelector((state) => state.projectData);

  const handleOpenClick = () => {
    setOpen(!open);
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    setOpen(!open);
    const newMembers = [
      ...new Set([...members, ...values.map((option) => option.userid)]),
    ];
    dispatch(
      type === 1 ? setProjectLeaders(newMembers) : setProjectMembers(newMembers)
    );
    addProjectMembers(projectData._id, type, newMembers);
  };

  const handleChange = (e, value) => {
    setValues(value);
  };

  useEffect(() => {
    if (open)
      getAllDisplayNames().then((results) => {
        if (results.status === "success") setOptions(results.users);
      });
  }, [open]);

  return (
    <div>
      <ListItem divider button onClick={handleOpenClick}>
        <Box textAlign="center" clone>
          <ListItemText
            primaryTypographyProps={{ color: "textPrimary" }}
            primary="+"
          ></ListItemText>
        </Box>
      </ListItem>
      <Dialog
        PaperProps={{ className: classes.dialog }}
        open={open}
        onClose={handleOpenClick}
        disableBackdropClick
      >
        <DialogTitle id="dialog-title">Add </DialogTitle>
        <form onSubmit={handleAddClick}>
          <DialogContent>
            <DialogContentText>
              Select users to add to the project.
            </DialogContentText>
            <Autocomplete
              ChipProps={{ className: classes.chip }}
              itemProp={{ className: classes.dialog_bg }}
              ListboxProps={{ className: classes.chip }}
              multiple
              id="add_users"
              options={options}
              getOptionLabel={(options) => options.display_name}
              onChange={handleChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={props.label}
                  inputProps={{
                    ...params.inputProps,
                    className: classes.dialog_bg,
                  }}
                  variant="outlined"
                />
              )}
            />
          </DialogContent>
          <DialogActions>
            <MyButton onClick={handleOpenClick}>Cancel</MyButton>
            <MyButton type="submit">Add To Project</MyButton>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default AddMembers;
