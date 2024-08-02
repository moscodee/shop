import {
  SELECTED_PRODUCT,
  SET_PRODUCTS,
  REMOVE_SELECTED_PRODUCT,
  INCREASE_PRODUCT,
  DECREASE_PRODUCT,
  ADD_TO_CARD,
  REMOVE_FROM_CARD,
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
export const increaseProduct = (product) => {
  return {
    type: INCREASE_PRODUCT,
    payload: product,
  };
};
export const decreaseProduct = (product) => {
  return {
    type: DECREASE_PRODUCT,
    payload: product,
  };
};
export const addToCard = (product) => {
  return {
    type: ADD_TO_CARD,
    payload: product,
  };
};
export const removeFromCard = (product) => {
  return {
    type: REMOVE_FROM_CARD,
    payload: product,
  };
};
