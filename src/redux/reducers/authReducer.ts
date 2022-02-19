import { ActionTypes } from "../../types/types";

import {
  AUTH_STARTED,
  REGISTRATION_SUCCESS,
  LOGIN_SUCCESS,
  AUTH_FAILURE,
  LOGOUT,
} from "../../constants/actionTypes";

type initialStateType = {
  userName: string;
  loading: boolean;
  userData: any;
  authError: boolean;
  errorMessage: string;
  userId: string;
};

const initialState: initialStateType = {
  userName: "your name",
  loading: false,
  userData: null,
  authError: false,
  errorMessage: "No ERROR!",
  userId: "",
};

const authReducer = (
  state = initialState,
  action: ActionTypes
): initialStateType => {
  switch (action.type) {
    case AUTH_STARTED:
      return {
        ...state,
        loading: true,
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        loading: false,
        authError: false,
        userData: action.payload,
        userName: action.payload.name,
        userId: action.payload.id,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        authError: false,
        userData: action.payload,
        userName: action.payload.name,
        userId: action.payload.user_id,
      };
    case AUTH_FAILURE:
      return {
        ...state,
        loading: false,
        authError: true,
        errorMessage: action.payload,
      };
    case LOGOUT:
      return { ...state, userData: null };

    default:
      return state;
  }
};

export default authReducer;
