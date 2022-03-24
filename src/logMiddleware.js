import {logIn, token} from './actions';
import {serverLogin} from './api';
import { AUTHENTICATE } from './actions';

export const logMiddleware = (store) => (next) => async (action) => {
    if(action.type === AUTHENTICATE){
        const {email, password} = action.payload;
        const success = await serverLogin(email, password)
        if(success){
            store.dispatch(logIn(success.token))
        }
        
    }else {
        next(action)
    }
};