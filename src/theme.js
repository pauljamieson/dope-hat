import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import grey from "@material-ui/core/colors/grey";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#222222",
    },
    secondary: {
      main: "#ffffff",
    },
    text: {
        primary: "#00b7eb",
        secondary: "#FF00FF"
    },
  },
});

export default theme;
