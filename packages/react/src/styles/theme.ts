import "./main.css";

import { colors, fonts } from "@blue-health/tokens";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      dark: colors.primaryDark,
    },

    secondary: {
      main: colors.secondary,
      dark: colors.secondaryDark,
    },

    common: {
      white: "#FFFFFF",
      black: "#000000",
    },

    error: {
      main: colors.error,
      dark: colors.errorDark,
    },

    success: {
      main: colors.success,
      dark: colors.successDark,
    },

    warning: {
      main: colors.warning,
      dark: colors.warningDark,
    },

    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
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
