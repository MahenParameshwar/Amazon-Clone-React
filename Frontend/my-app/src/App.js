import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./Styles/theme";

import Navbar from "./Components/Layout/Navbar";

import Routes from "./Routes/Routes";

import Footer from "./Components/Layout/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("called");
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
