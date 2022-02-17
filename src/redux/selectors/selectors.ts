import { RootState } from "../rootReducer";

export const getCoinList = (state: RootState) => state.getData.coinList;

export const getGetDataLoadingState = (state: RootState) =>
  state.getData.loading;
export const getGetDataErrorState = (state: RootState) =>
  state.getData.getDataError;
export const getGetDataErrorMessage = (state: RootState) =>
  state.getData.errorMessage;
