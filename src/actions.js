export const LOG_IN = "LOG_IN"
export const LOG_OUT = "LOG_OUT"
export const AUTHENTICATE = "AUTHENTICATE"
export const ADD_CARD = "ADD_CARD"
export const CARD_TO_STORE = "CARD_TO_STORE"


export const logIn = () => ({type: LOG_IN})
export const logOut = () => ({type: LOG_OUT})
export const authenticate = (email , password) => ({
    type: AUTHENTICATE,
     payload:{email , password}
    });

export const addCard = (cardNumber , expiryDate, cardName, cvc, token) =>({
    type: ADD_CARD, payload: {cardNumber , expiryDate, cardName, cvc, token},
})
export const cardToStore = (cardNumber , expiryDate, cardName, cvc, token) => ({
    type: CARD_TO_STORE, payload:{cardNumber , expiryDate, cardName, cvc, token},
})