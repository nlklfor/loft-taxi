import {createStore , applyMiddleware} from 'redux';
import rootReducer from './reducers';
import createSagaMiddleWare from 'redux-saga';
import {logSaga} from './logSaga';


const sagaMiddleware = createSagaMiddleWare()

export const store = createStore(rootReducer , applyMiddleware(sagaMiddleware));

sagaMiddleware.run(logSaga);