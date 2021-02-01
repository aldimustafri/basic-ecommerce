/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
const initialState = {
  buyData: [],
};

const BuyReducer = (state = initialState, action) => {
  switch (action.type) {
  case "BUY_ACTION":
    return {
      ...state,
      buyData: [...state.buyData,
        {
          id: action.data.id,
          imageUrl: action.data.imageUrl,
          title: action.data.title,
          description: action.data.description,
          price: action.data.price,
          loved: action.data.loved,
        }],
    };

  default:
    return state;
  }
};
export default BuyReducer;
