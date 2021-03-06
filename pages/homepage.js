/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 * @create date 2021-02-01 18:08:58
 * @modify date 2021-02-01 18:08:58
 * @desc [description]
 */
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { loadState } from "../utils/localstorage";
import { server } from "../utils/server";

const Head = dynamic(() => import("next/head"));
const Search = dynamic(() => import("../components/layout/Search"));
const Category = dynamic(() => import("../components/page/HomePage/Category"));
const Product = dynamic(() => import("../components/page/HomePage/Product"));
const Footer = dynamic(() => import("../components/layout/Footer"));

function homepage({ initialData }) {
  const productCategory = initialData.data[0].data.category;
  const productList = initialData.data[0].data.productPromo;
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
        <title>Ecommerce - HomePage</title>
        <link rel="canonical" href={`${server}${router.asPath}`} />
        <meta name="description" content="Basic HomePage" />
        <meta name="keywords" content="ecommerce, buy, sale" />
        <meta property="og:title" content="Ecommerce - HomePage" />
        <meta property="og:url" content={`${server}${router.asPath}`} />
        <meta property="og:description" content="Basic HomePage" />
      </Head>

      <Search />
      <Category data={productCategory} />
      <Product data={productList} />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch(`${server}/api/product`);
    const initialData = await res.json();
    return { props: { initialData } };
  } catch (error) {
    return { props: { initialData: null } };
  }
}

export default homepage;
