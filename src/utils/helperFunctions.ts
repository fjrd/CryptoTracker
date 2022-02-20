import { Dispatch } from "react";
import { RouteComponentProps } from "react-router";
import { routes } from "../constants/routes";
import { actionLogout } from "../redux/actionCreators";

import { ActionTypes } from "../types/types";

import { api } from "./api";

export const validatePassword = (
  _: string | null,
  value: string,
  callback: (arg?: string) => void
) => {
  if (value.length < 8) {
    callback("less than 8 chars!");
  } else {
    callback();
  }
};

export const redirectToMainPage = (history: RouteComponentProps["history"]) => {
  history.push(routes.main);
};

export const fixLongPrice = (price: number) => price.toFixed(5);

export const logout = (
  dispatch: Dispatch<ActionTypes>,
  history: RouteComponentProps["history"]
) => {
  localStorage.removeItem("userToken");
  delete (api.defaults.headers as any).Authorization;
  dispatch(actionLogout());
  redirectToMainPage(history);
};
