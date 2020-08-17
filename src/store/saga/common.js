import { call, put, select, take, delay } from "redux-saga/effects";

export function* sagaCommon(action, task) {
  if (!task) return;
  let response;
  try {
    response = yield call(task, action.params);
    // const {
    //     data: { errors }
    //   } = response;
    // if (errors) {
    //   console.log(`${action.type}_____ERROR`, errors);
    // const { status } = errors[0];
    //   }
    //   else {
    let SUCCESS = "_SUCCESS";
    console.log('sagaCommon',action.type + SUCCESS,response)
    yield put({ type: action.type + SUCCESS, response });
    //   }
  } catch (errors) {
    console.log(`${action.type}__Catch_____ERROR`, errors);
  } finally {
    const callback =
      typeof action.callback === "function" ? action.callback : null;
    if (callback && response) {
      const data = response;
      callback.call(this, response);
    }
  }
}
