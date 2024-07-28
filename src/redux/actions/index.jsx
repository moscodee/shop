import { SELECTED_PRODUCT, SET_PRODUCTS } from "../constans";

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const selectProduct = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product,
  };
};
