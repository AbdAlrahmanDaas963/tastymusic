import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#2D1E6B",
    },
    secondary: {
      main: "#D9D9D9",
    },
    third: {
      main: "#DD00B8",
    },
    fourth: {
      main: "#0D0A0D",
    },
  },
  typography: {
    fontFamily: '"Carter One", sans-serif',
    allVariants: {
      color: "#D9D9D9",
    },
    carter: {
      fontFamily: '"Carter One", system-ui',
    },
    lato: {
      fontFamily: '"Lato", sans-serif',
    },
  },
});

export default theme;
