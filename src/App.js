import { ThemeProvider } from "@material-ui/styles";
import NavBar from "./components/NavBar";
import RouterSwitch from "./components/RouterSwitch";
import theme from "./theme";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <NavBar />
          <RouterSwitch />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
