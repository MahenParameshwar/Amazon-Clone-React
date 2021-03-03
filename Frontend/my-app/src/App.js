import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./Styles/theme";

import Routes from "./Routes/Routes";

import { useEffect } from "react";

function App() {
  useEffect(() => {}, []);

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
