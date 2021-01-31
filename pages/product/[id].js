import React, { useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Error from "next/error";
import { loadState } from "../../utils/localstorage";
import { server } from "../../utils/server";

const Head = dynamic(() => import("next/head"));
const Search = dynamic(() => import("../../components/layout/Search"));
const Content = dynamic(() => import("../../components/page/DetailPage/ProductDetail"));

function homepage({ initialData }) {
  const router = useRouter();
  const getDataAuth = loadState("persist:AuthData");
  const data = Object.keys(initialData).length;

  useEffect(() => {
    if (!getDataAuth) {
      router.push("/");
    }
  });

  if (data === 0) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{`Ecommerce - Product ${initialData.data.title}`}</title>
        <link rel="canonical" href={`${server}${router.asPath}`} />
        <meta name="description" content={`${initialData.data.description}`} />
        <meta name="keywords" content="ecommerce, buy, sale" />
        <meta property="og:title" content={`Ecommerce - Product ${initialData.data.title}`} />
        <meta property="og:url" content={`${server}${router.asPath}`} />
        <meta property="og:description" content={`${initialData.data.description}`} />
      </Head>

      <Search />
      <Content data={initialData.data} />
    </>
  );
}

export async function getServerSideProps({ query }) {
  try {
    const res = await fetch(`${server}/api/product/${query.id}`);
    const initialData = await res.json();
    return { props: { initialData } };
  } catch (error) {
    return { props: { initialData: null } };
  }
}

export default homepage;
