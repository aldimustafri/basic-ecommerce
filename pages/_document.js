/* eslint-disable react/jsx-props-no-spreading */
import Document, {
  Head, Html, Main, NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="id, in">
        <meta charSet="utf-8" />

        <meta name="copyright" content="E-commerce" />
        <meta name="language" content="ES" />
        <meta name="robots" content="index,follow" />
        <meta name="reply-to" content="email@ecommerce.com" />
        <meta name="owner" content="E-commerce" />
        <meta name="author" content="Aldi Mustafri" />
        <meta name="publisher" content="E-commerce" />

        <meta name="directory" content="submission" />
        <meta name="category" content="Website" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />

        <meta name="subject" content="Basic web ecommerce" />

        <meta name="og:email" content="email@ecommerce.com" />

        <meta name="og:street-address" content="Indonesia Building 45" />
        <meta name="og:locality" content="Jakarta Pusat" />
        <meta name="og:region" content="Jakarta" />
        <meta name="og:postal-code" content="12345" />
        <meta name="og:country-name" content="Indonesia" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta content="yes" name="apple-touch-fullscreen" />
        <meta name="apple-mobile-web-app-status-bar-style" content="red" />

        <meta httpEquiv="Page-Enter" content="RevealTrans(Duration=2.0,Transition=2)" />
        <meta httpEquiv="Page-Exit" content="RevealTrans(Duration=3.0,Transition=12)" />

        <meta name="mssmarttagspreventparsing" content="true" />
        <meta httpEquiv="X-UA-Compatible" content="chrome=1" />
        <meta name="msapplication-starturl" content="https://E-commerce.id" />
        <meta name="msapplication-window" content="width=800;height=600" />
        <meta name="msapplication-navbutton-color" content="red" />

        <meta name="application-name" content="E-commerce" />
        <meta name="msapplication-tooltip" content="Basic web ecommerce" />

        <meta name="E-commerce" />

        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />

        <meta property="og:site_name" content="E-commerce Website" />
        <meta property="og:type" content="website" />

        {this.props.styleTags}
        <Head />

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
