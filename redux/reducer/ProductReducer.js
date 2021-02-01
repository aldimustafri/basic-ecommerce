/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
const initialState = {
  productData: [],
};

const indexSameData = (state, action) => {
  const sameProduct = (product) => (
    product.id === action.id
  );

  return state.productData.findIndex(sameProduct);
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
  case "PRODUCT_LIST_ACTION":
    return {
      ...state,
      productData: [...action.data],
    };

  case "PRODUCT_LIKE_ACTION":
    const indexProduct = indexSameData(state, action);

    if (indexProduct !== -1) {
      state.productData[indexProduct].loved += action.loved;
      return {
        ...state,
        productData: state.productData,
      };
    }

    return {
      ...state,
      productData: [...action.data],
    };

  case "PRODUCT_UNLIKE_ACTION":
    const indexProduct2 = indexSameData(state, action);

    if (indexProduct2 !== -1) {
      state.productData[indexProduct].loved -= action.loved;
      return {
        ...state,
        productData: state.productData,
      };
    }

    return {
      ...state,
      productData: [...action.data],
    };

  default:
    return state;
  }
};
export default ProductReducer;
