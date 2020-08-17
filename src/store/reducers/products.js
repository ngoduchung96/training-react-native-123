import { actionType } from "../constants/actionType";

const { GET_FEATURED_PRODUCTS, GET_FEATURED_PRODUCTS_SUCCESS } = actionType;

const initialState = [{ intialData: 1 },{ intialData: 1 }];

export const products = (state = initialState, action) => {
  switch (action.type) {
    case GET_FEATURED_PRODUCTS: {
      return state;
    }
    case GET_FEATURED_PRODUCTS_SUCCESS: {
      const data = action.response;
      console.log("reducers", data);
      console.log('state',state)
      return [...data];
    }
    default:
      return state;
  }
};
