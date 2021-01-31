/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "../components/style/Global.css";
import { createGlobalStyle } from "styled-components";
import { wrapper } from "../redux/store";

Router.events.on("routeChangeStart", () => { NProgress.start(), NProgress.configure({ showSpinner: false }); });
Router.events.on("routeChangeComplete", () => { NProgress.done(), NProgress.configure({ showSpinner: false }); });
Router.events.on("routeChangeError", () => { NProgress.done(), NProgress.configure({ showSpinner: false }); });

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif; color:#666;
  }
`;

function EcommerceApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(EcommerceApp);
