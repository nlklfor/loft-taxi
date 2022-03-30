import { combineReducers } from "redux";
import { cardReducer } from "./card";
import log from './log';


export default combineReducers({log, card: cardReducer})