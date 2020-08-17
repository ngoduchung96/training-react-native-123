import { actionType } from "../constants/actionType";

const { REGISTER_USER, REGISTER_USER_SUCCESS } = actionType;

const initialState = false;

export const isAuthenticated = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER: {
      return state;
    }
    case REGISTER_USER_SUCCESS: {
      const data = action.response;
      console.log("reducers", data);
      console.log('state',state)
      return [...data];
    }
    default:
      return state;
  }
};