export const ProductCategoryAction = ({ imageUrl, id, name }) => ({
  type: "PRODUCT_CATEGORY_ACTION",
  imageUrl,
  id,
  name,
});

export const ProductListAction = (data) => ({
  type: "PRODUCT_LIST_ACTION",
  data,
});

export const ProductLikeAction = ({ id, loved }) => ({
  type: "PRODUCT_LIKE_ACTION",
  id,
  loved,
});

export const ProductUnlinkeAction = ({ id, loved }) => ({
  type: "PRODUCT_UNLIKE_ACTION",
  id,
  loved,
});
