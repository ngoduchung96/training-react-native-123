import product from "./products";
import { fork, all } from 'redux-saga/effects';

function* rootSaga() {
  yield all([...product.map((watcher) => fork(watcher))]);
}

export default rootSaga;
