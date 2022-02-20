import { Dispatch } from "react";
import { ActionTypes } from "../../types/types";

import { getSearchCoins } from "../../utils/api";

import {
  actionGetDataStarted,
  actionGetDataFailure,
  actionGetSearchCoinsSuccess,
} from "../actionCreators";

const actionGetSearchCoins = (query: string) => {
  return (dispatch: Dispatch<ActionTypes>) => {
    dispatch(actionGetDataStarted());

    try {
      getSearchCoins(query)
        .then((response) => {
          console.log(response);
          dispatch(actionGetSearchCoinsSuccess(response.data));
        })
        .catch((error) => {
          dispatch(actionGetDataFailure(error.message));
        });
    } catch (error) {
      console.log(`error tryCatch:${error}`);
    }
  };
};

export default actionGetSearchCoins;
