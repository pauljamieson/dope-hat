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
import { useLocation } from "react-router-dom";

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
  const { listName } = props;
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState(["loading..."]);
  const [values, setValues] = useState([]);
  const classes = useStyles();
  const location = useLocation();

  const handleOpenClick = () => {
    setOpen(!open);
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    //const afterSlash = /([^/]+$)/;
    const projectId = location.pathname.match(/([^/]+$)/);
    let type = listName === "Team Leaders" ? 1 : 2;
    console.log(projectId[0], type, values);
    addProjectMembers(projectId[0], type, values).then((result) => {
      console.log(result);
      setValues([]);
    });
  };

  const handleChange = (e, value) => {
    setValues(value);
  };

  useEffect(() => {
    if (open)
      getAllDisplayNames().then((results) => {
        if (results.status === "success")
          setOptions(results.users.map((value) => value.display_name));
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
        <DialogTitle id="dialog-title">Add {listName}</DialogTitle>
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
              onChange={handleChange}
              renderInput={(params) => (
                <TextField
                  {...params}
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
