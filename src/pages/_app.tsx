import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme/theme';
import StylesGlobal from '../styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <StylesGlobal />
    </ThemeProvider>
  );
};

export default MyApp;
