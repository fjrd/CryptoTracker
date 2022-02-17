import {
  GET_DATA_FAILURE,
  GET_DATA_STARTED,
  GET_COINS_SUCCESS,
} from "../constants/actionTypes";

export const actionGetDataFailure = (errorMessage: string) => ({
  type: GET_DATA_FAILURE,
  payload: errorMessage,
});

export const actionGetDataStarted = () => ({ type: GET_DATA_STARTED });

export const actionGetCoinsSuccess = (coinList: Record<string, any>) => ({
  type: GET_COINS_SUCCESS,
  payload: coinList,
});
