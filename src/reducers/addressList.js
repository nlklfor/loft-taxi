import { handleActions } from "redux-actions";
import {fetchAddressSuccess} from "../actions";

export const addressList = handleActions(
  {
    [fetchAddressSuccess]: (_state, action) => action.payload
  },
  []
);