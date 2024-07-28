import { combineReducers } from "redux";
import { setProductsReducer } from "./productReducers";

const reducers = combineReducers({ products: setProductsReducer });

export default reducers;
