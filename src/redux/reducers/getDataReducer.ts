import {
  GET_DATA_FAILURE,
  GET_DATA_STARTED,
  GET_COINS_SUCCESS,
  GET_SEARCH_COINS_SUCCESS,
  GET_CRYPTO_CANDLE_RANGE_SUCCESS,
  GET_COIN_CHART_INFO_SUCCESS,
  SAVE_CURRENT_CRYPTO,
} from "../../constants/actionTypes";

import { ActionTypes } from "../../types/types";

type initialStateType = {
  loading: boolean;
  getDataError: boolean;
  errorMessage: string;
  coinList: any;
  searchCoinList: any;
  chartData: any;
  currentCryptoId: string | null;
};

const initialState: initialStateType = {
  loading: false,
  getDataError: false,
  errorMessage: "No ERROR!",
  coinList: [],
  searchCoinList: [],
  chartData: [[]],
  currentCryptoId: null,
};

const getDataReducer = (
  state = initialState,
  action: ActionTypes
): initialStateType => {
  switch (action.type) {
    case GET_DATA_STARTED:
      return { ...state, loading: true };
    case GET_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        getDataError: true,
        errorMessage: action.payload,
      };
    case GET_COINS_SUCCESS:
      return {
        ...state,
        loading: false,
        getDataError: false,
        errorMessage: "",
        coinList: action.payload,
      };
    case GET_SEARCH_COINS_SUCCESS:
      return {
        ...state,
        loading: false,
        getDataError: false,
        errorMessage: "",
        searchCoinList: action.payload,
      };
    case GET_CRYPTO_CANDLE_RANGE_SUCCESS:
      return {
        ...state,
        loading: false,
        getDataError: false,
        errorMessage: "",
        chartData: action.payload,
      };
    case SAVE_CURRENT_CRYPTO: {
      return {
        ...state,
        currentCryptoId: action.payload,
      };
    }

    case GET_COIN_CHART_INFO_SUCCESS:
      return {
        ...state,
        chartData: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default getDataReducer;
