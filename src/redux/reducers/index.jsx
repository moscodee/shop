import { combineReducers } from "redux";
import { setProductsReducer, selectedProductReducer } from "./productReducers";

const reducers = combineReducers({
  products: setProductsReducer,
  product: selectedProductReducer,
});

export default reducers;
