import { Dispatch } from "react";
import { ActionTypes } from "../../types/types";

import { getCoins } from "../../utils/api";

import {
  actionGetDataStarted,
  actionGetDataFailure,
  actionGetCoinsSuccess,
} from "../actionCreators";

const actionGetCoins = () => {
  return (dispatch: Dispatch<ActionTypes>) => {
    dispatch(actionGetDataStarted());

    try {
      getCoins()
        .then((response) => {
          console.log(response.data);
          dispatch(actionGetCoinsSuccess(response.data));
        })
        .catch((error) => {
          dispatch(actionGetDataFailure(error.message));
        });
    } catch (error) {
      console.log(`error tryCatch:${error}`);
    }
  };
};

export default actionGetCoins;
