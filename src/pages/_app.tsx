import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ModalContextProvider } from "../contexts/modalContext";

import { GlobalStyle } from "../styles/global";
import { defaultTheme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <ModalContextProvider>
          <Component {...pageProps} />
        </ModalContextProvider>

        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
