import { combineReducers } from "redux";
import {
  setProductsReducer,
  selectedProductReducer,
  cardReducer,
} from "./productReducers";

const reducers = combineReducers({
  products: setProductsReducer,
  product: selectedProductReducer,
  card: cardReducer,
});

export default reducers;
