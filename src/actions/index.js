// Action Types
import {
  FETCH_COINS_LIST_DATA,
  FETCH_COINS_LIST_DATA_SUCCESS,
  FETCH_COINS_LIST_DATA_FAIL,
  FETCH_COIN_DETAILS,
  FETCH_COIN_DETAILS_SUCCESS,
  FETCH_COIN_DETAILS_FAIL,
} from './ActionTypes';

// Action Creators
// Cryptocurrencies Home
export const fetchCoinsListData = () => ({
  type: FETCH_COINS_LIST_DATA,
});

export const fetchCoinsListDataSuccess = (data) => ({
  type: FETCH_COINS_LIST_DATA_SUCCESS,
  data,
});

export const fetchCoinsListDataFail = (error) => ({
  type: FETCH_COINS_LIST_DATA_FAIL,
  error,
});

// Cryptocurrency Details
export const fetchCoinDetails = (id) => ({
  type: FETCH_COIN_DETAILS,
  id,
});

export const fetchCoinDetailsSuccess = (data) => ({
  type: FETCH_COIN_DETAILS_SUCCESS,
  data,
});

export const fetchCoinDetailsFail = (error) => ({
  type: FETCH_COIN_DETAILS_FAIL,
  error,
});
