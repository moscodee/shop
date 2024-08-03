import {
  SELECTED_PRODUCT,
  SET_PRODUCTS,
  REMOVE_SELECTED_PRODUCT,
  REMOVE_FROM_CARD,
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
    //add to card
    case ADD_TO_CARD:
      const isExist = state.find((item) => item.id === payload.id);
      if (!isExist) {
        payload.count = 1;
        return [...state, payload];
      } else {
        return state.map((item) => {
          if (item.id === payload.id) {
            return { ...item, count: item.count + 1 };
          } else {
            return item;
          }
        });
      }
    //remove from card
    case REMOVE_FROM_CARD:
      const isProductExist = state.find((item) => item.id === payload.id);
      if (isProductExist && payload.count > 1) {
        payload.count -= 1;
        const product = state.filter((item) => item.id !== payload.id);
        return [...product, payload];
      } else {
        return state.filter((item) => item.id !== payload.id);
      }
    //default
    default:
      return state;
  }
};
