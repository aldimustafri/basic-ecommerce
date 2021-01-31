const initialState = {
  productData: [],
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
  case "PRODUCT_LIST_ACTION":
    return {
      ...state,
      productData: [...action.data],
    };
  default:
    return state;
  }
};
export default ProductReducer;
