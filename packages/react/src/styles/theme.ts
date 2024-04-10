import "./main.css";

import { colors, fonts } from "@blue-health/tokens";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: colors["primary-main"],
      dark: colors["primary-dark"],
    },
    secondary: {
      main: colors["secondary-main"],
      dark: colors["secondary-dark"],
    },
    error: {
      main: colors["error-main"],
      dark: colors["error-dark"],
    },
    success: {
      main: colors["success-main"],
      dark: colors["success-dark"],
    },
    text: {
      primary: colors["text-primary"],
      secondary: colors["text-secondary"],
    },
  },
  typography: {
    fontFamily: fonts.default,
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h4: "h4",
          body1: "p",
          body2: "span",
        },
      },
    },
  },
});
