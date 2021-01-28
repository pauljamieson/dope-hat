import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    backgroundColor: "#1f1f1f",
  },
};

const MyButton = ({ classes, ...other }) => {
  return <Button className={classes.root} variant="outlined" {...other} />;
};

export default withStyles(styles)(MyButton);
