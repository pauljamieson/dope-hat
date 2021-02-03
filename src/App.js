import { MuiThemeProvider } from "@material-ui/core/styles";
import NavBar from "./components/NavBar";
import RouterSwitch from "./components/RouterSwitch";
import theme from "./theme";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "./action";
import { getUser } from "./helpers/WebApi";

function App() {
  const dispatch = useDispatch();

  if (localStorage.getItem("username")) {
    getUser(
      localStorage.getItem("username"),
      localStorage.getItem("session_id")
    )
      .then((resp) => {
        dispatch(
          setUser(
            resp.username,
            localStorage.getItem("session_id"),
            resp.display_name,
            resp.projects
          )
        );
      })
      .catch((err) => console.log(`Err: ${err}`));
  }

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
