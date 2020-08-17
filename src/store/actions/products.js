import { actionType } from "../constants/actionType";
const { GET_FEATURED_PRODUCTS } = actionType;

export const getFeaturedProducts = (params, callback) => ({
  type: GET_FEATURED_PRODUCTS,
  params: params,
  callback: callback,
});
