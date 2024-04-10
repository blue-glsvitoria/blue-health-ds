import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '@blue-health/react'
import React from "react";

export const parameters = {
  // backgrounds: {
  //   default: 'dark'
  // },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },

}

export const withMuiTheme = (Story: any) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
);

export const decorators = [withMuiTheme]



