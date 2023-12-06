import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

/**
 * Root is swizzled here so that we can supply @mui/theme with a ThemeProvider.
 * https://docusaurus.io/docs/swizzling#wrapper-your-site-with-root
 */

const theme = createTheme({});

export default function Root({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}
