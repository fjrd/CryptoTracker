import { ActionTypes } from "../../types/types";

import {
  AUTH_STARTED,
  REGISTRATION_SUCCESS,
  LOGIN_SUCCESS,
  AUTH_FAILURE,
} from "../../constants/actionTypes";

type initialStateType = {
  userName: string;
  loading: boolean;
  userData: any;
  authError: boolean | null;
  errorMessage: string;
  userId: string;
};

const initialState: initialStateType = {
  userName: "Ivan Ivanov",
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
        authError: null,
        userData: action.payload,
        userName: action.payload.fullName,
        userId: action.payload.id,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        authError: null,
        userData: action.payload,
        userName: action.payload.fullName,
        userId: action.payload.user_id,
      };
    case AUTH_FAILURE:
      return {
        ...state,
        loading: false,
        authError: true,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
