import axios from "axios";
// import { createBrowserHistory } from 'history';

// import store from '../redux/store';

// import { logout } from './HelperFunctions/helperFunctions';

const token = localStorage.getItem("userToken");

export const apiCoinGecko = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});

export const api = axios.create({
  baseURL: "http://vm-8.tc.neoflex.cloud:8080",
  headers: { Authorization: `Bearer ${token}` },
});

/* api.interceptors.response.use(
  (res) => {
    return res;
  },

  (error) => {
    if (error.response.status === 401) {
      logout(store.dispatch, createBrowserHistory());
    }

    return Promise.reject(error);
  }
); */

export const postRegistrationUserData = (data: any) =>
  api.post(`/api/v1/auth/sign_up`, data);

export const postLoginUserData = (data: any) =>
  api.post(`/api/v1/auth/sign_in`, data);

export const getCoins = () =>
  apiCoinGecko.get("coins/markets/", {
    params: { vs_currency: "usd", per_page: 250 },
  });

export const getClaims = (
  limit: number,
  offset: number,
  column: string,
  sort: string
) => apiCoinGecko.get(`/claim`, { params: { offset, limit, column, sort } });
