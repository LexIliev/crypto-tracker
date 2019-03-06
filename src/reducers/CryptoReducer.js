import {
  FETCH_CRYPTO_DATA,
  FETCH_CRYPTO_DATA_SUCCESS,
  FETCH_CRYPTO_DATA_FAIL,
} from '../utils/ActionTypes';

const initialState = {
  isFetching: null,
  data: [],
  hasError: false,
  errorMessage: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CRYPTO_DATA:
      return {
        ...state,
        isFetching: true,
        data: null,
        hasError: false,
        errorMessage: null,
      };
    case FETCH_CRYPTO_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
        hasError: false,
        errorMessage: null,
      };
    case FETCH_CRYPTO_DATA_FAIL:
      return {
        ...state,
        isFetching: false,
        data: [],
        hasError: true,
        errorMessage: action.err,
      };
    default:
      return state;
  }
}
