import { RootState } from "../rootReducer";

export const getCoinList = (state: RootState) => state.getData.coinList;
export const getSearchCoinList = (state: RootState) =>
  state.getData.searchCoinList;

export const getGetDataLoadingState = (state: RootState) =>
  state.getData.loading;
export const getGetDataErrorState = (state: RootState) =>
  state.getData.getDataError;
export const getGetDataErrorMessage = (state: RootState) =>
  state.getData.errorMessage;

export const getChartData = (state: RootState) => state.getData.chartData;

export const getAuthLoadingState = (state: RootState) => state.auth.loading;

export const getUserName = (state: RootState) => state.auth.userName;

export const getAuthErrorState = (state: RootState) => state.auth.authError;
export const getAuthErrorMessage = (state: RootState) =>
  state.auth.errorMessage;

export const getUserId = (state: RootState) => state.auth.userId;

export const getCurrentUserData = (state: RootState) => state.auth.userData;

export const getCurrentCryptoId = (state: RootState) =>
  state.getData.currentCryptoId;
