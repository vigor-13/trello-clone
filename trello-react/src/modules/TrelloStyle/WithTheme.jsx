import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  ul, ol {
    list-style: none
  }
`;

const theme = {
  main: {
    fontSize: '12px',
  },
};

const WithTheme = (App) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);

export default WithTheme;
