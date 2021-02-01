/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
const initialState = {
  searchData: [],
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
  case "SEARCH_ACTION":
    return {
      ...state,
      searchData: [action.results],
    };

  default:
    return state;
  }
};
export default SearchReducer;
