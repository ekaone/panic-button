import Head from "next/head";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
