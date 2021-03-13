import { withStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";

const styles = {
  root: {
    //backgroundColor: "#1f1f1f",
  },
};

const MySnackbar = ({ classes, ...other }) => {
  return (
    <Snackbar
      className={classes.root}
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      {...other}
    ></Snackbar>
  );
};

export default withStyles(styles)(MySnackbar);
