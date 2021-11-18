import type { AppProps } from "next/app";
import { ModalContextProvider } from "../contexts/ModalContext";
import { NotificationsContextProvider } from "../contexts/NotificationsContext";

import { GlobalStyle } from "../styles/global";
import { defaultTheme } from "../styles/theme";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <NotificationsContextProvider>
          <ModalContextProvider>
            <Component {...pageProps} />
          </ModalContextProvider>
        </NotificationsContextProvider>

        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
