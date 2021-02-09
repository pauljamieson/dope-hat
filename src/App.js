import { MuiThemeProvider } from "@material-ui/core/styles";
import NavBar from "./components/NavBar";
import RouterSwitch from "./components/RouterSwitch";
import theme from "./theme";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser, loggedIn, loggedOut, clearUser } from "./action";
import { getUser } from "./helpers/WebApi";
import { Button } from "@material-ui/core";

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
        dispatch(loggedIn());
      })
      .catch((err) => console.log(`Err: ${err}`));
  }

  const onClickHandler = (e) => {
    localStorage.clear();
    dispatch(clearUser());
    dispatch(loggedOut());
    console.log(localStorage.length);
  };
  //localStorage.clear();
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <NavBar />
          <Button onClick={onClickHandler}>Clear User</Button>

          <RouterSwitch />
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
