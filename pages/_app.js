import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global-style';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
