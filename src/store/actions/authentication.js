import { actionType } from "../constants/actionType";
const { REGISTER_USER } = actionType;

export const registerUser = (params, callback) => ({
  type: REGISTER_USER,
  params: params,
  callback: callback,
});
