import Script from "next/script";
import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../theme";
import createEmotionCache from "../createEmotionCache";

import "../styles/globals.css";
import "../styles/bundle/css/animate.css";
import "../styles/bundle/css/bootstrap.min.css";
import "../styles/bundle/css/font-awesome.min.css";
import "../styles/bundle/css/isotop.css";
import "../styles/bundle/css/magnific-popup.css";
import "../styles/bundle/css/owl.carousel.min.css";
import "../styles/bundle/css/responsive.css";
import "../styles/bundle/css/style.css";
import "../styles/bundle/css/xsIcon.css";
import { AuthContextProvider } from "../contexts/AuthContext";

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthContextProvider>
          <Component {...pageProps} />
        </AuthContextProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
