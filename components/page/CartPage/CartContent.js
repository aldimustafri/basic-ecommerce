import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  SectionCart, CartItem, CartText, SectionImage, CartImg, CartDetail, CartTitle, CartPrice, CartBtn, Title,
} from "./CartContent.style";

function CartContent() {
  const { buyData } = useSelector((state) => state.Cart);

  return (
    <SectionCart>
      <Title>My Cart List</Title>

      {buyData.length ? (
        buyData.map((item) => (
          <CartItem key={uuidv4()}>
            <SectionImage>
              <CartImg src={item.imageUrl} />
            </SectionImage>

            <CartDetail>
              <CartTitle>{item.title}</CartTitle>
              <CartPrice>{item.price}</CartPrice>

              <Link href="/product/[id]" as={`/product/${item.id}`}>
                <CartBtn>Detail</CartBtn>
              </Link>

            </CartDetail>
          </CartItem>
        ))
      ) : (
        <CartText> No item</CartText>
      )}
    </SectionCart>
  );
}

export default CartContent;
