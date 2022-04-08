import {createAction} from 'redux-actions';

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const REGISTER = "REGISTER";
export const AUTHENTICATE = "AUTHENTICATE";
export const ADD_CARD = "ADD_CARD";
export const CARD_TO_STORE = "CARD_TO_STORE";
export const CARD_REQUEST = "CARD_REQUEST";
export const CARD_SUCCESS = "CARD_SUCCESS";
export const REMOVE_FLAG = "REMOVE_FLAG";
export const FETCH_ROUTE = 'FETCH_ROUTE';
export const SET_ROUTE = 'SET_ROUTE';
export const DELETE_ROUTE = 'REMOVE_ROUTE';


export const logIn = () => ({type: LOG_IN})
export const logOut = () => ({type: LOG_OUT})
export const register = (email ,password, name) => ({
    type : REGISTER ,
    payload: {email, password, name},
})
export const authenticate = (email , password) => ({
    type: AUTHENTICATE,
     payload:{email , password}
    });

    export const addCard = (cardNumber, expiryDate, cardName, cvc) => ({
        type: ADD_CARD, payload: {cardNumber, expiryDate, cardName, cvc}
    })
    export const cardToStore = data => ({type: CARD_TO_STORE, payload: data})
    export const cardRequest = token => ({ type: CARD_REQUEST, payload: token })
    export const cardSuccess = (data) => ({ type: CARD_SUCCESS, payload: data })

    export const fetchAddressRequest = createAction("FETCH_ADDRESS_REQUEST")
    export const fetchAddressSuccess = createAction("FETCH_ADDRESS_SUCCESS")

    export const removeFlag = () => ({ type: REMOVE_FLAG })
    export const fetchRoute = (address1, address2) => ({ type: FETCH_ROUTE, payload: { address1, address2 },
    });
    export const setRoute = (route) => ({ type: SET_ROUTE, payload: { route } });
    export const deleteRoute = () => ({ type: DELETE_ROUTE });
