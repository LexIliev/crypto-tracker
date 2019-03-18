import { takeLatest, call, put } from 'redux-saga/effects';

import {
  FETCH_COINS_LIST_DATA,
  FETCH_COIN_DETAILS,
} from '../actions/ActionTypes';

import { fetchCoinsListData, fetchCoinDetails } from '../services/api';

import {
  fetchCoinsListDataSuccess,
  fetchCoinsListDataFail,
  fetchCoinDetailsSuccess,
  fetchCoinDetailsFail,
} from '../actions';

const getCoinsListData = function*() {
  try {
    // api call
    const result = yield call(fetchCoinsListData);

    yield put(fetchCoinsListDataSuccess(result));
  } catch (error) {
    yield put(fetchCoinsListDataFail(error));
  }
};

const getCoinDetails = function*(action) {
  try {
    // api call
    const result = yield call(fetchCoinDetails, action.id);

    yield put(fetchCoinDetailsSuccess(result));
  } catch (error) {
    yield put(fetchCoinDetailsFail(error));
  }
};

const rootSaga = function*() {
  yield takeLatest(FETCH_COINS_LIST_DATA, getCoinsListData);
  yield takeLatest(FETCH_COIN_DETAILS, getCoinDetails);
};

export default rootSaga;
