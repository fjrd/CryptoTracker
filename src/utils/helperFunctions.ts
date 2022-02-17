import { RouteComponentProps } from "react-router";
import { routes } from "../constants/routes";

export const validatePassword = (
  _: string | null,
  value: string,
  callback: (arg?: string) => void
) => {
  if (value.length < 5) {
    callback("less than 5 chars!");
  } else {
    callback();
  }
};

export const redirectToMainPage = (history: RouteComponentProps["history"]) => {
  history.push(routes.main);
};

export const fixLongPrice = (price: number) => price.toFixed(5);
