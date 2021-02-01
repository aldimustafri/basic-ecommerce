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
      searchData: [
        {
          id: action.results.id,
          imageUrl: action.results.imageUrl,
          title: action.results.title,
          description: action.results.description,
          price: action.results.price,
          loved: action.results.loved,
        },
      ],
    };

  default:
    return state;
  }
};
export default SearchReducer;
