import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';

import theme from './src/styles/theme';

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {element}
    </ThemeProvider>
  );
