import { combineReducers } from "redux";
import { cardReducer } from "./card";
import log from './log';
import { addressList } from "./addressList";
import route from "./route";
import reg from "./reg";


export default combineReducers({
    log,
    card: cardReducer,
    addressList: addressList,
    route,
    reg,  
    
})