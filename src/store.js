import {createStore , applyMiddleware} from 'redux';
import rootReducer from './reducers';
import { logMiddleware } from './logMiddleware';

export const store = createStore(rootReducer , applyMiddleware(logMiddleware));