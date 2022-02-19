import {
  GET_DATA_FAILURE,
  GET_DATA_STARTED,
  GET_COINS_SUCCESS,
  GET_SEARCH_COINS_SUCCESS,
  AUTH_STARTED,
  AUTH_FAILURE,
  REGISTRATION_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
  GET_CRYPTO_CANDLE_RANGE_SUCCESS,
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

export const actionGetSearchCoinsSuccess = (coinList: Record<string, any>) => ({
  type: GET_SEARCH_COINS_SUCCESS,
  payload: coinList,
});

export const actionGetCryptoCandleRangeSuccess = (chartData: any) => ({
  type: GET_CRYPTO_CANDLE_RANGE_SUCCESS,
  payload: chartData,
});

export const actionAuthStarted = () => ({
  type: AUTH_STARTED,
});

export const actionAuthFailure = (errorMessage: string) => ({
  type: AUTH_FAILURE,
  payload: errorMessage,
});

export const actionRegistrationSuccess = (data: any) => ({
  type: REGISTRATION_SUCCESS,
  payload: data,
});

export const actionLoginSuccess = (data: any) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const actionLogout = () => ({ type: LOGOUT });
