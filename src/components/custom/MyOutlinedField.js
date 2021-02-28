import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import theme from "../../theme";

const styles = {
  root: {
    "& input, textarea, select": {
      // Keeps background the same color as the page
      //backgroundColor: "transparent",
      // Keeps the input shaped background element
      borderRadius: "5px",
      MozTransitionDelay: "9999s",
      // Makes the input boxes stand out
      backgroundColor: "#1f1f1f !important",
      "&:-webkit-autofill": {
        // delays the ugly auto fill thing chrome does
        WebkitTransitionDelay: "9999s",
      },
    },
  },
  input: {
    color: `${theme.palette.text.primary}  !Important`,
  },
  label: {
    // Keeps the label th e same color when focused
    color: `${theme.palette.text.secondary}  !Important`,
    "& span": { display: "none" },
  },
};

const MyOutlinedField = ({ classes, ...other }) => {
  return (
    <TextField
      className={classes.root}
      InputProps={{ color: "primary" }}
      InputLabelProps={{ className: classes.label }}
      variant="outlined"
      fullWidth
      {...other}
    />
  );
};

export default withStyles(styles)(MyOutlinedField);
