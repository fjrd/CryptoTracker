import {
  GET_DATA_FAILURE,
  GET_DATA_STARTED,
  GET_COINS_SUCCESS,
} from "../../constants/actionTypes";

import { ActionTypes } from "../../types/types";

type initialStateType = {
  loading: boolean;
  getDataError: boolean;
  errorMessage: string;
  coinList: any;
};

const initialState: initialStateType = {
  loading: false,
  getDataError: false,
  errorMessage: "No ERROR!",
  coinList: [],
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

    default:
      return state;
  }
};

export default getDataReducer;
