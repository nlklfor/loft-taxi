import { call, put, takeEvery } from 'redux-saga/effects';
import { logIn, REGISTER } from './actions';
import { registration } from './api';

export function* regSaga(action) {
  const data = action.payload;
  const registrate = yield call(registration, data);
  if (registrate.success) {
    yield put(logIn(registrate.token));
  }
}
export function* registrationSaga() {
  yield takeEvery(REGISTER, regSaga);
}