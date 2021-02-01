/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 * @create date 2021-02-01 18:09:43
 * @modify date 2021-02-01 22:10:45
 * @desc [description]
 */
import Link from "next/link";
import React, { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import {
  SearchButton, SearchInput, SearchWrapper, SectionSearch,
} from "../../layout/Search.style";
import {
  SectionSearchContent, SearchItem, SearchText, SectionImage, SearchImg, SearchDetail, SearchTitle, SearchPrice, SearchBtn, Title, SearchList,
} from "./SearchContent.style";
import Colors from "../../style/Colors";
import { SearchAction } from "../../../redux/action/SearchAction";

function SearchContent() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const { productData } = useSelector((state) => state.Product);
  const { searchData } = useSelector((state) => state.Search);
  const [dataResult, setDataResult] = useState(null);

  const onSubmit = async (data) => {
    const results = productData.filter((item) => item.title.toLowerCase().includes(data.searchData));
    setDataResult(results);
    dispatch(SearchAction(results));
  };

  return (
    <>
      <SectionSearch>
        <SearchWrapper>
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
            <SearchInput placeholder="Search here.." name="searchData" ref={register} />

            <SearchButton type="submit">
              <FontAwesomeIcon icon={faSearch} style={{ color: `${Colors.whiteSoft}`, fontSize: "16px" }} />
            </SearchButton>
          </form>

        </SearchWrapper>
      </SectionSearch>

      <SectionSearchContent>
        <Title>Search Result</Title>
        <SearchList>
          {dataResult || searchData[0] ? (
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
      </SectionSearchContent>
    </>
  );
}

export default SearchContent;
