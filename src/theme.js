import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#00a0b0",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
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
