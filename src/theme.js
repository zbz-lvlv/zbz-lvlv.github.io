import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#032892",
      light: "#1a42a8",
      dark: "#021d6e",
    },
    secondary: {
      main: "#78f406",
      light: "#93f63e",
      dark: "#5cc004",
    },
    background: {
      default: "#f8f9fc",
      paper: "#ffffff",
    },
    text: {
      primary: "#0c1b2a",
      secondary: "#4a5568",
    },
  },
  typography: {
    fontFamily: "Inter, Segoe UI, Helvetica Neue, Arial, sans-serif",
    h3: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h4: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 8,
          padding: "8px 20px",
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(3, 40, 146, 0.3)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)",
          border: "1px solid rgba(0,0,0,0.06)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(255,255,255,0.9)",
        },
      },
    },
  },
});

export default theme;
