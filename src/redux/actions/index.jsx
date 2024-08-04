import {
  SELECTED_PRODUCT,
  SET_PRODUCTS,
  REMOVE_SELECTED_PRODUCT,
<<<<<<< HEAD
  DECREASE_PRODUCT,
=======
>>>>>>> db11362f246b11b06d6bffc98fff8c40c0e32057
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
<<<<<<< HEAD
export const decreaseProduct = (product) => {
  return {
    type: DECREASE_PRODUCT,
    payload: product,
  };
};
=======
>>>>>>> db11362f246b11b06d6bffc98fff8c40c0e32057
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
