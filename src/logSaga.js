import {takeEvery , call , put} from 'redux-saga/effects'
import { AUTHENTICATE , logIn} from './actions'
import { serverLogin } from './api';


export function* authenticateSaga(action){
    const {email, password} = action.payload;
    const result = yield call({serverLogin, email , password})
    if(result.success){
        yield put(logIn())
    }
}

export function* logSaga() {
    yield takeEvery(AUTHENTICATE, authenticateSaga)
}