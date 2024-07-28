import { SET_PRODUCTS } from "../constans";

const initialState = {
  products: [],
};

export const setProductsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
