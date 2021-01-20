import { ThemeProvider } from "@material-ui/styles";
import NavBar from "./components/NavBar";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
