import { fork } from "redux-saga/effects";
import { logSaga } from "./logSaga";
import { cardSaga } from "./paymentSaga";
import { addressListSaga} from "./addressSaga";
import { TheRoutesSaga } from "./routeSaga";
import { regSaga } from "./regSaga";

export function* rootSaga() {
    yield fork(logSaga);
    yield fork(cardSaga);
    yield fork(addressListSaga);
    yield fork(TheRoutesSaga);
    yield fork(regSaga);
}