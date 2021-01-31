import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { server } from "../utils/server";

const Head = dynamic(() => import("next/head"));
const LoginContent = dynamic(() => import("../components/page/Login/LoginContent"));

function home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Ecommerce - Login Page</title>
        <link rel="canonical" href={`${server}${router.asPath}`} />
        <meta name="description" content="Basic Login Page" />
        <meta name="keywords" content="ecommerce, buy, sale" />
        <meta property="og:title" content="Ecommerce - Login Page" />
        <meta property="og:url" content={`${server}${router.asPath}`} />
        <meta property="og:description" content="Basic Login Page" />
      </Head>

      <LoginContent />
    </>
  );
}
export default home;
