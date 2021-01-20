import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import grey from "@material-ui/core/colors/grey";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#222222",
    },
    secondary: {
      main: grey[100],
    },
    text: {
      primary: "#00b7eb",
    },
  },
});

export default theme;
