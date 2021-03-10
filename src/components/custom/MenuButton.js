import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/icons/Menu";
import theme from "../../theme";

const styles = {
  root: {
    backgroundColor: "#1f1f1f",
    margin: 2,
  },
  icon: {
    color: theme.palette.text.secondary,
  },
};

const MenuButton = ({ classes, ...other }) => {
  return (
    <IconButton className={classes.root} variant="outlined" {...other}>
      <Menu className={classes.icon} />
    </IconButton>
  );
};

export default withStyles(styles)(MenuButton);
