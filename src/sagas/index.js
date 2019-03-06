import { takeLatest, call, put } from 'redux-saga/effects';

import { FETCH_CRYPTO_DATA, FETCH_CRYPTO_DETAILS } from '../utils/ActionTypes';

import { fetchCryptoData, fetchCryptoDetails } from '../services/api';

import {
  fetchCryptoDataSuccess,
  fetchCryptoDataFail,
  fetchCryptoDetailsSuccess,
  fetchCryptoDetailsFail,
} from '../actions';

const getCryptoData = function* () {
  try {
    // api call
    const response = yield call(fetchCryptoData);
    const result = yield response.json();

    yield put(fetchCryptoDataSuccess(result));
  } catch (error) {
    yield put(fetchCryptoDataFail(error));
  }
};

const getCryptoDetails = function* (action) {
  try {
    // api call
    const response = yield call(fetchCryptoDetails, action.id);
    const result = yield response.json();

    yield put(fetchCryptoDetailsSuccess(result));
  } catch (error) {
    yield put(fetchCryptoDetailsFail(error));
  }
};

const rootSaga = function* () {
  yield takeLatest(FETCH_CRYPTO_DATA, getCryptoData);
  yield takeLatest(FETCH_CRYPTO_DETAILS, getCryptoDetails);
};

export default rootSaga;
