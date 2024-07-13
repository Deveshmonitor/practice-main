import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5755FE",
      light: "#fff",
    },
    secondary: {
      main: "#074C83",
      light: "#BFCFE7",
    },
  },
  typography: {
    fontFamily: ["DM Sans"].join(","),
    button: {
      textTransform: "none",
    },
  },
});

export { theme };
