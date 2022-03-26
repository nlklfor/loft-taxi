import {takeEvery , call , put} from 'redux-saga/effects'
import { AUTHENTICATE , logIn} from './actions'
import { serverLogin } from './api';


export function* authenticateSaga(action) {
    const data = action.payload;
    const success = yield call(serverLogin, data);
    if (success) {
      yield put(logIn());
    }
  }

export function* logSaga() {
    yield takeEvery(AUTHENTICATE, authenticateSaga)
}