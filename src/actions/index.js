import {
  FETCH_CRYPTO_DATA,
  FETCH_CRYPTO_DATA_SUCCESS,
  FETCH_CRYPTO_DATA_FAIL,
  FETCH_CRYPTO_DETAILS,
  FETCH_CRYPTO_DETAILS_SUCCESS,
  FETCH_CRYPTO_DETAILS_FAIL,
} from '../utils/ActionTypes';

export const fetchCryptoData = () => ({
  type: FETCH_CRYPTO_DATA,
});

export const fetchCryptoDataSuccess = (data) => ({
  type: FETCH_CRYPTO_DATA_SUCCESS,
  data,
});

export const fetchCryptoDataFail = (error) => ({
  type: FETCH_CRYPTO_DATA_FAIL,
  error,
});

export const fetchCryptoDetails = (id) => ({
  type: FETCH_CRYPTO_DETAILS,
  id,
});

export const fetchCryptoDetailsSuccess = (data) => ({
  type: FETCH_CRYPTO_DETAILS_SUCCESS,
  data,
});

export const fetchCryptoDetailsFail = (error) => ({
  type: FETCH_CRYPTO_DETAILS_FAIL,
  error,
});
