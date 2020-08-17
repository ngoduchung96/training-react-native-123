import { actionType } from "../constants/actionType";
import productsAPI from "../api/products";
import { all, takeLatest } from "redux-saga/effects";
import { sagaCommon } from "./common";

const { GET_FEATURED_PRODUCTS } = actionType;
const { getFeaturedProductsAPI } = productsAPI;

export default [
  function* product() {
    yield all([
      takeLatest(GET_FEATURED_PRODUCTS, (action) =>
        sagaCommon(action, getFeaturedProductsAPI)
      ),
    ]);
  },
];
