/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 * @create date 2021-02-01 18:09:43
 * @modify date 2021-02-01 21:45:23
 * @desc [description]
 */
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  SectionSearch, SearchItem, SearchText, SectionImage, SearchImg, SearchDetail, SearchTitle, SearchPrice, SearchBtn, Title, SearchList,
} from "./SearchContent.style";

function SearchContent() {
  const { searchData } = useSelector((state) => state.Search);
  // console.log(searchData);

  return (
    <SectionSearch>
      <Title>Search Result</Title>
      <SearchList>
        {searchData[0].length ? (
          searchData[0].map((item) => (
            <SearchItem key={uuidv4()}>
              <SectionImage>
                <SearchImg src={item.imageUrl} />
              </SectionImage>

              <SearchDetail>
                <SearchTitle>{item.title}</SearchTitle>
                <SearchPrice>{item.price}</SearchPrice>

                <Link href="/product/[id]" as={`/product/${item.id}`}>
                  <SearchBtn>Detail</SearchBtn>
                </Link>

              </SearchDetail>
            </SearchItem>
          ))
        ) : (
          <SearchText> No item</SearchText>
        )}

      </SearchList>
    </SectionSearch>
  );
}

export default SearchContent;
