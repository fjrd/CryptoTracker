import {
  GET_DATA_FAILURE,
  GET_DATA_STARTED,
  GET_COINS_SUCCESS,
<<<<<<< HEAD
  GET_SEARCH_COINS_SUCCESS,
=======

  GET_SEARCH_COINS_SUCCESS,

>>>>>>> 1fa2e89d771cc802b3f4a86fd5b779c7e63dfad2
  AUTH_STARTED,
  AUTH_FAILURE,
  REGISTRATION_SUCCESS,
  LOGIN_SUCCESS,
<<<<<<< HEAD
  LOGOUT,
  GET_CRYPTO_CANDLE_RANGE_SUCCESS,
  SAVE_CURRENT_CRYPTO,
  GET_COIN_CHART_INFO_SUCCESS,
=======

  LOGOUT,
  GET_CRYPTO_CANDLE_RANGE_SUCCESS,

>>>>>>> 1fa2e89d771cc802b3f4a86fd5b779c7e63dfad2
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

<<<<<<< HEAD
export const actionGetCoinChartInfoSuccess = (
  chartData: Record<string, any>
) => ({
  type: GET_COIN_CHART_INFO_SUCCESS,
  payload: chartData,
});
=======
>>>>>>> 1fa2e89d771cc802b3f4a86fd5b779c7e63dfad2

export const actionGetSearchCoinsSuccess = (coinList: Record<string, any>) => ({
  type: GET_SEARCH_COINS_SUCCESS,
  payload: coinList,
});

export const actionGetCryptoCandleRangeSuccess = (chartData: any) => ({
  type: GET_CRYPTO_CANDLE_RANGE_SUCCESS,
  payload: chartData,
});
<<<<<<< HEAD
=======

>>>>>>> 1fa2e89d771cc802b3f4a86fd5b779c7e63dfad2

export const actionAuthStarted = () => ({
  type: AUTH_STARTED,
});

export const actionAuthFailure = (errorMessage: string) => ({
  type: AUTH_FAILURE,
  payload: errorMessage,
});

export const actionRegistrationSuccess = (data: any) => ({
  type: REGISTRATION_SUCCESS,
<<<<<<< HEAD
  payload: data,
=======

  payload: data,
=======

>>>>>>> 1fa2e89d771cc802b3f4a86fd5b779c7e63dfad2
});

export const actionLoginSuccess = (data: any) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

<<<<<<< HEAD
export const actionLogout = () => ({ type: LOGOUT });

export const actionSaveCurrentCrypto = (currentId: string) => ({
  type: SAVE_CURRENT_CRYPTO,
  payload: currentId,
});
=======

export const actionLogout = () => ({ type: LOGOUT });

>>>>>>> 1fa2e89d771cc802b3f4a86fd5b779c7e63dfad2
