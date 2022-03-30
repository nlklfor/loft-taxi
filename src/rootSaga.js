import { fork } from "redux-saga/effects";
import { logSaga } from "./logSaga";
import { cardSaga } from "./paymentSaga";
export function* rootSaga() {
    yield fork(logSaga);
    yield fork(cardSaga);
}