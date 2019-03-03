import { takeEvery, call, put } from 'redux-saga/effects';

import { FETCH_CRYPTO_DATA } from './../utils/ActionTypes';

import { fetchCryptoData } from '../services/api';
import { fetchCryptoDataSuccess, fetchCryptoDataFail } from '../actions';

const getCryptoData = function*(action) {
  try {
    // api call
    const response = yield call(fetchCryptoData);
    const result = yield response.json();

    yield put(fetchCryptoDataSuccess(result));
  } catch (error) {
    yield put(fetchCryptoDataFail(error));
  }
};

const rootSaga = function*() {
  yield takeEvery(FETCH_CRYPTO_DATA, getCryptoData);
};

export default rootSaga;
