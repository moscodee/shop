import {
  SELECTED_PRODUCT,
  SET_PRODUCTS,
  REMOVE_SELECTED_PRODUCT,
  REMOVE_FROM_CARD,
  ADD_TO_CARD,
  DECREASE_PRODUCT,
  INCREASE_PRODUCT,
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
    //add to card
    case ADD_TO_CARD:
      const isExist = state.find((item) => item.id === payload.id);
      payload.count = 1;
      if (!isExist) return [...state, payload];
    //remove from card
    case REMOVE_FROM_CARD:
      return state.filter((item) => item.id !== payload.id);
    //increase
    case INCREASE_PRODUCT:
      const productAdd = state.find((item) => item.id === payload.id);
      if (productAdd) {
        console.log(productAdd);
        productAdd.count += 1;
        const products = state.filter((item) => item.id !== payload.id);
        return [...products, productAdd];
      }

      return [...state, payload];
    //decrease
    case DECREASE_PRODUCT:
      const productRemove = state.find((item) => item.id == payload.id);
      if (productRemove && productRemove.count != 1) productRemove.count -= 1;
      const products = state.filter((item) => item.id !== payload.id);
      return [...products, productRemove];
    //default
    default:
      return state;
  }
};
