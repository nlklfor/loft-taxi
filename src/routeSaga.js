import { put, call, takeEvery } from "redux-saga/effects";
import { getRoute } from "./api";
import {  FETCH_ROUTE, setRoute } from "./actions";

export function* routeSaga(action) {
  const result = yield call(getRoute, action.payload);
  yield put(setRoute(result));
  console.log(result)
}

export function* TheRoutesSaga() {
  yield takeEvery(FETCH_ROUTE, routeSaga);
}