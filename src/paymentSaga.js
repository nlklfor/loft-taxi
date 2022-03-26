import { ADD_CARD, token } from "./actions";
import { addCard } from "./api";

export const addCard = (store) => (next) => async(action) => {
    if (action.type === ADD_CARD) {
        const {log: {token} } = store.getState()
        // const {cardNumber , expiryDate, cardName, cvc, token} = action.payload;
        const result = await addCard({...action.payload, token})
        if (result) {
            // store.dispatch(cardToStore())
        }
    }
        next(action);
};