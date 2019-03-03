import {
  FETCH_CRYPTO_DATA,
  FETCH_CRYPTO_DATA_SUCCESS,
  FETCH_CRYPTO_DATA_FAIL,
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
