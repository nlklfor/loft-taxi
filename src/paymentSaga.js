
import { ADD_CARD, cardToStore } from "./actions";
import { addCard } from "./api";
import { takeEvery, call ,put } from "redux-saga/effects";

function* paymentSaga(action) {
    const result = yield call(addCard, {...action.payload});
    if (result.success) {
        yield put (cardToStore(action.payload))
    }
}
export function* cardSaga() {
    yield takeEvery(ADD_CARD, paymentSaga)
}

