import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  SearchButton, SearchInput, SearchWrapper, SectionSearch,
} from "./Search.style";
import Colors from "../style/Colors";

function search() {
  return (
    <SectionSearch>
      <SearchWrapper>
        <SearchInput placeholder="Search here.." />
        <SearchButton>
          <FontAwesomeIcon icon={faSearch} style={{ color: `${Colors.whiteSoft}`, fontSize: "16px" }} />
        </SearchButton>
      </SearchWrapper>
    </SectionSearch>
  );
}

export default search;
