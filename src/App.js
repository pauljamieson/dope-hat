import { MuiThemeProvider } from "@material-ui/core/styles";
import NavBar from "./components/NavBar";
import RouterSwitch from "./components/RouterSwitch";
import theme from "./theme";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <NavBar />
          <RouterSwitch />
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
