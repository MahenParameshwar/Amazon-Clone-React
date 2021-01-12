import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./Styles/theme";
import Admin from "./Components/Pages/Admin";
import Navbar from "./Components/Layout/Navbar";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import Routes from "./Routes/Routes";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
