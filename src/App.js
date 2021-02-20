import { MuiThemeProvider } from "@material-ui/core/styles";
import NavBar from "./components/NavBar";
import RouterSwitch from "./components/RouterSwitch";
import theme from "./theme";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser, loggedIn } from "./action";
import { autoLogin, getUser } from "./helpers/WebApi";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("session")) {
      autoLogin(localStorage.getItem("session")).then((resp) => {
        console.log(resp);
        if (resp.status === "success" && resp.login) {
          dispatch(
            setUser(
              resp.username,
              resp.display_name,
              localStorage.getItem("session"),
              resp.projects
            )
          );
          dispatch(loggedIn());
        }
      });
    }
  });

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
