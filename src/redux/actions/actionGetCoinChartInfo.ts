import { Dispatch } from "react";
import { ActionTypes } from "../../types/types";

import { getCoinChartInfo } from "../../utils/api";

import {
  actionGetDataStarted,
  actionGetDataFailure,
  actionGetCoinChartInfoSuccess,
} from "../actionCreators";

const actionGetCoinChartInfo = (id: string) => {
  return (dispatch: Dispatch<ActionTypes>) => {
    dispatch(actionGetDataStarted());

    try {
      getCoinChartInfo(id)
        .then((response) => {
          console.log(response);
          dispatch(actionGetCoinChartInfoSuccess(response.data.prices));
        })
        .catch((error) => {
          dispatch(actionGetDataFailure(error.message));
        });
    } catch (error) {
      console.log(`error tryCatch:${error}`);
    }
  };
};

export default actionGetCoinChartInfo;
