import { FormInstance } from "antd";
import { Dispatch } from "react";
import { ActionTypes } from "../../types/types";

import {
  actionAuthStarted,
  actionAuthFailure,
  actionRegistrationSuccess,
} from "../actionCreators";

import { postRegistrationUserData } from "../../utils/api";

import { api } from "../../utils/api";

export const actionRegisterUser = (data: any, form: FormInstance) => {
  return (dispatch: Dispatch<ActionTypes>) => {
    dispatch(actionAuthStarted());

    try {
      console.log(`reg! data:${JSON.stringify(data)}`);
      postRegistrationUserData(data)
        .then((res) => {
          console.log(res.data);
          if (!res.data) {
            dispatch(actionAuthFailure(res.statusText));
          } else {
            localStorage.setItem("userToken", res.data.token);
            (
              api.defaults.headers as any
            ).Authorization = `Bearer ${res.data.token}`;
            console.log(
              `получаю токен который только что впихнул :${localStorage.getItem(
                "userToken"
              )}`
            );

            dispatch(actionRegistrationSuccess(res.data));

            form.resetFields();
          }
        })
        .catch((error) => {
          dispatch(actionAuthFailure(error.response.data.message));
        });
    } catch (error) {
      console.log(error);
    }
  };
};
