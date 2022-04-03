
import {  put, call, takeEvery } from "redux-saga/effects";
import { getAddressRequest } from "./api";
import { fetchAddressRequest, fetchAddressSuccess } from "./actions";

export function* addressSaga() {
          const result = yield call(getAddressRequest);
          yield put(fetchAddressSuccess(result.addresses));
  console.log(result)
}

export function* addressListSaga() {
  yield takeEvery(fetchAddressRequest, addressSaga);
}