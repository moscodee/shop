import {
  SELECTED_PRODUCT,
  SET_PRODUCTS,
  REMOVE_SELECTED_PRODUCT,
} from "../constans";

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = (product) => {
  return {
    type: REMOVE_SELECTED_PRODUCT,
    payload: product,
  };
};
