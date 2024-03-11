// import { createTheme } from "@mui/material/styles";
// import { red } from "@mui/material/colors";

import { cyan, deepOrange, orange, teal } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
// Create a theme instance.
const theme = extendTheme({
  customStyle: {
    headerHeight: "58px",
    boardBarHeight: "68px",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: teal[500],
          secondary: deepOrange[500],
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: cyan[500],
          secondary: orange[500],
        },
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            width: "8px",
            height: "4px",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#006400",
            borderRadius: "6px",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            cursor: "pointer",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: "0.875rem",
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.light,
          },
        }),
      },
    },
  },
});

export default theme;
