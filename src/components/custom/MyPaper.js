import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import theme from "../../theme";

const styles = {
  root: {
    backgroundColor: "#1f1f1f ",
    minWidth: 200,
    padding: 20,
    textAlign: "center",
    width: "fit-content",
    maxWidth: "80%",
  },
};

const MyPaper = ({ classes, ...other }) => {
  return <Paper square className={classes.root} {...other} />;
};

export default withStyles(styles)(MyPaper);
