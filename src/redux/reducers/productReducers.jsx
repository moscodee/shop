import {
  SELECTED_PRODUCT,
  SET_PRODUCTS,
  REMOVE_SELECTED_PRODUCT,
  ADD_TO_CARD,
} from "../constans";

const initialState = {
  products: [],
};
const cardState = [];
export const setProductsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SELECTED_PRODUCT:
      return { ...state, ...payload };
    case REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const cardReducer = (state = cardState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CARD:
      const productIndex = state.find((item) => item.id === payload.id);
      if (productIndex) {
        productIndex.count += 1;
        const products = state.filter((item) => item.id !== payload.id);
        return [...products, productIndex];
      }
      payload.count = 1;
      return [...state, payload];
    case REMOVE_SELECTED_PRODUCT:
      return state;
    default:
      return state;
  }
};
