import { combineReducers } from "redux";
import { cardReducer } from "./card";
import log from './log';
import { addresses } from "./addresses";
import route from "./route";


export default combineReducers({
    log,
    card: cardReducer,
    addresses: addresses,
    route  
    
})