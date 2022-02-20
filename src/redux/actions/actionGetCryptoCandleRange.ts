import { Dispatch } from "react";
import { ActionTypes } from "../../types/types";

import { getCryptoCandleRange } from "../../utils/api";

import {
  actionGetDataStarted,
  actionGetDataFailure,
  actionGetCryptoCandleRangeSuccess,
} from "../actionCreators";

const actionGetCryptoCandleRange = (
  figi: string,
  startDate: string,
  endDate: string
) => {
  return (dispatch: Dispatch<ActionTypes>) => {
    dispatch(actionGetDataStarted());

    try {
      getCryptoCandleRange(figi, startDate, endDate)
        .then((response) => {
          console.log(response);
          dispatch(actionGetCryptoCandleRangeSuccess(response.data));
        })
        .catch((error) => {
          dispatch(actionGetDataFailure(error.message));
        });
    } catch (error) {
      console.log(`error tryCatch:${error}`);
    }
  };
};

export default actionGetCryptoCandleRange;
