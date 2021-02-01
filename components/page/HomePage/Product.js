/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 * @create date 2021-02-01 18:09:58
 * @modify date 2021-02-01 18:09:59
 * @desc [description]
 */
import React from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import {
  DetailBtn,
  DetailText,
  ImageProduct, ImageSection, ProductContent, ProductList, ProductTitle, ProductWrapper, SectionProduct,
} from "./Product.style";
import { ProductListAction } from "../../../redux/action/ProductAction";

function Product({ data }) {
  const dispatch = useDispatch();

  dispatch(ProductListAction(data));

  return (
    <SectionProduct>
      <ProductContent>
        {data.map((item) => (
          <ProductList key={item.id}>
            <ProductWrapper>
              <ImageSection>
                <ImageProduct src={item.imageUrl} />
              </ImageSection>

              <ProductTitle>
                {item.title}
                <Link href="/product/[id]" as={`/product/${item.id}`}>
                  <DetailBtn>
                    <DetailText>Detail</DetailText>
                  </DetailBtn>
                </Link>
              </ProductTitle>

            </ProductWrapper>
          </ProductList>
        ))}
      </ProductContent>
    </SectionProduct>
  );
}

export default Product;
