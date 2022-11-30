import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import React from 'react';
import theme from '../styles/theme';
import GlobalStyle from '../styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
