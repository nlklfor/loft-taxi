import { handleActions } from "redux-actions";
import {fetchAddressSuccess} from "../actions";

export const addresses = handleActions(
  {
    [fetchAddressSuccess]: (_state, action) => action.payload
  },
  []
);