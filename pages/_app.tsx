import GlobalStyle from "../src/styles/GlobalStyle";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}
export default MyApp;
