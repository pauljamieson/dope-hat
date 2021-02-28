import { MuiThemeProvider } from "@material-ui/core/styles";
import NavBar from "./components/NavBar";
import RouterSwitch from "./components/RouterSwitch";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <div className="App">
              <NavBar />
              <RouterSwitch />
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
