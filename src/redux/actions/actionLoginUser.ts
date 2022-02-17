import { FormInstance } from "antd";
import { Dispatch } from "react";
import { ActionTypes } from "../../types/types";

import {
  actionAuthStarted,
  actionAuthFailure,
  actionLoginSuccess,
} from "../actionCreators";
import { api, postLoginUserData } from "../../utils/api";

export const actionLoginUser = (data: any, form: FormInstance) => {
  return (dispatch: Dispatch<ActionTypes>) => {
    dispatch(actionAuthStarted());

    try {
      console.log(`log! data:${JSON.stringify(data)}`);
      return postLoginUserData(data)
        .then((res) => {
          console.log(res);
          if (!res.data) dispatch(actionAuthFailure(res.statusText));
          else {
            if (data.rememberMe)
              localStorage.setItem("userToken", res.data.token);

            (
              api.defaults.headers as any
            ).Authorization = `Bearer ${res.data.token}`;

            dispatch(actionLoginSuccess(res.data));
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
