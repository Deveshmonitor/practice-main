import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/Theme";
import RouteObject from "./RouteObject";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <RouteObject />
    </ThemeProvider>
  );
}

export default App;
