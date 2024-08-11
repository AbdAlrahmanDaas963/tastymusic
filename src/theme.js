import { createTheme } from "@mui/material/styles";

const themeOptions = {
  palette: {
    // Customize your palette here if needed
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: '"Carter One", system-ui',
    h1: {
      fontFamily: '"Carter One", system-ui',
    },
    h2: {
      fontFamily: '"Carter One", system-ui',
    },
    h3: {
      fontFamily: '"Carter One", system-ui',
    },
    h4: {
      fontFamily: '"Carter One", system-ui',
    },
    h5: {
      fontFamily: '"Carter One", system-ui',
    },
    h6: {
      fontFamily: '"Carter One", system-ui',
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
