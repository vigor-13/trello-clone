import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    line-height: normal;
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: 0;
  }

  ul, ol {
    list-style: none;
  }

  a, a:hover, a:active {
    text-decoration: none;
    outline: none;
    color: inherit;
  }

  .fixed-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
  }
`;

const theme = {
  mainThemeColor: '#026aa7',
  mainBorderRadius: '4px',
  palette: {
    main: '#026aa7',
    white: '#ffffff',
  },
};

const WithTheme = (App) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);

export default WithTheme;
