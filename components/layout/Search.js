/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 * @create date 2021-02-01 18:08:23
 * @modify date 2021-02-01 22:04:16
 * @desc [description]
 */
import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import {
  SearchButton, SearchInput, SearchWrapper, SectionSearch,
} from "./Search.style";
import Colors from "../style/Colors";
import { SearchAction } from "../../redux/action/SearchAction";

function search() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { productData } = useSelector((state) => state.Product);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const results = productData.filter((item) => item.title.toLowerCase().includes(data.searchData));
    dispatch(SearchAction(results));
    router.push("/searching");
  };

  return (
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
  );
}

export default search;
