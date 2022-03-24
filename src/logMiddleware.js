import {logIn, token} from './actions';
import {serverLogin} from './api';
import { AUTHENTICATE } from './actions';

export const logMiddleware = (store) => (next) => async (action) => {
    if(action.type === AUTHENTICATE){
        const {email, password} = action.payload;
        const result = await serverLogin(action.payload)
        if(result.success){
            store.dispatch(logIn(result.token))
        }
        
    }else {
        next(action)
    }
};