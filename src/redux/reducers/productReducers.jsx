import {
  SELECTED_PRODUCT,
  SET_PRODUCTS,
  REMOVE_SELECTED_PRODUCT,
  REMOVE_FROM_CARD,
  ADD_TO_CARD,
<<<<<<< HEAD
  DECREASE_PRODUCT,
=======
>>>>>>> db11362f246b11b06d6bffc98fff8c40c0e32057
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
<<<<<<< HEAD
            return { ...item, count: (item.count += 1) };
          } else return item;
=======
            return { ...item, count: item.count + 1 };
          } else {
            return item;
          }
>>>>>>> db11362f246b11b06d6bffc98fff8c40c0e32057
        });
      }
    //remove from card
    case REMOVE_FROM_CARD:
<<<<<<< HEAD
      return state.filter((item) => item.id !== payload.id);
    //decrease
    case DECREASE_PRODUCT:
      return state.map((item) => {
        if (item.id === payload.id && payload.count > 1) {
          return { ...item, count: (item.count -= 1) };
        } else return item;
      });
=======
      const isProductExist = state.find((item) => item.id === payload.id);
      if (isProductExist && payload.count > 1) {
        payload.count -= 1;
        const product = state.filter((item) => item.id !== payload.id);
        return [...product, payload];
      } else {
        return state.filter((item) => item.id !== payload.id);
      }
>>>>>>> db11362f246b11b06d6bffc98fff8c40c0e32057
    //default
    default:
      return state;
  }
};
