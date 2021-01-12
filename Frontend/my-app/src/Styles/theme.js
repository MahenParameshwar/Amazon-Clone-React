import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f0c14b",
    },
    secondary: {
      main: "#111",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderColor: "#a88734 #9c7e31 #846a29",
        color: "#111",
        borderRadius: "3px",
        borderStyle: "solid",
        borderWidth: "1px",
        cursor: "pointer",
        boxShadow: "0 1px 0 rgba(255,255,255,.4) inset",
        background: "linear-gradient(to bottom,#f7dfa5,#f0c14b)",
        fontSize: "13px",
        height: "29px",
        lineHeight: "29px",
        padding: "6px 12px",
        margin: 0,
        outline: 0,
        fontWeight: 500,
        "&:hover": {
          background: "linear-gradient(to bottom,#f7dfa5,#f0b00b)",
        },
      },
    },
    MuiTypography: {
      h1: {
        fontSize: "28px",
        lineHeight: 1.2,
        fontWeight: 400,
        color: "#111",
        padding: 0,
        margin: 0,
      },
    },
  },
});
