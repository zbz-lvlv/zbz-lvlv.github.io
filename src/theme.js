import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0b3a8f",
      light: "#2b5fb4",
      dark: "#072761",
    },
    secondary: {
      main: "#7ed321",
      dark: "#5ea514",
    },
    background: {
      default: "#f5f7fb",
      paper: "#ffffff",
    },
    text: {
      primary: "#0c1b2a",
    },
  },
  typography: {
    fontFamily: "Inter, Segoe UI, Helvetica Neue, Arial, sans-serif",
    h3: {
      fontWeight: 700,
    },
  },
});

export default theme;
