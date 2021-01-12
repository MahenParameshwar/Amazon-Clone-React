import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./Styles/theme";
import Admin from "./Components/Pages/Admin";
import Navbar from "./Components/Layout/Navbar";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
