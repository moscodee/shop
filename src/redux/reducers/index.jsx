import { combineReducers } from "redux";
import { setProductsReducer } from "./productReducers";

const reducers = combineReducers({ allproducts: setProductsReducer });

export default reducers;
