/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 * @create date 2021-02-01 18:09:01
 * @modify date 2021-02-01 19:14:00
 * @desc [description]
 */
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { loadState } from "../utils/localstorage";
import { server } from "../utils/server";

const Head = dynamic(() => import("next/head"));
const Search = dynamic(() => import("../components/layout/Search"));
const Content = dynamic(() => import("../components/page/SearchPage/SearchContent"));
const Footer = dynamic(() => import("../components/layout/Footer"));

function cart() {
  const router = useRouter();
  const getDataAuth = loadState("persist:Data");

  useEffect(() => {
    if (!getDataAuth) {
      router.push("/");
    }
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Ecommerce - Search Result</title>
        <link rel="canonical" href={`${server}${router.asPath}`} />
        <meta name="description" content="Basic Cart" />
        <meta name="keywords" content="ecommerce, buy, sale" />
        <meta property="og:title" content="Ecommerce - Cart" />
        <meta property="og:url" content={`${server}${router.Cart}`} />
        <meta property="og:description" content="Basic Cart" />
      </Head>

      <Search />
      <Content />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default cart;
