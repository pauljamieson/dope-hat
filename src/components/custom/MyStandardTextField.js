import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import theme from "../../theme";

const styles = {
  root: {
    "& input, textarea, select": {
      borderRadius: "5px",
      MozTransitionDelay: "9999s",
      "&:-webkit-autofill": {
        WebkitTransitionDelay: "9999s",
      },
    },
  },
  label: {
    color: `${theme.palette.text.secondary}  !Important`,
  },
};

const MyStandardTextField = ({ classes, ...other }) => {
  return (
    <TextField
      className={classes.root}
      InputLabelProps={{ className: classes.label }}
      variant="standard"
      fullWidth
      {...other}
    />
  );
};

export default withStyles(styles)(MyStandardTextField);
