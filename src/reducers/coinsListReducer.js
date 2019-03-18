import {
  FETCH_COINS_LIST_DATA,
  FETCH_COINS_LIST_DATA_SUCCESS,
  FETCH_COINS_LIST_DATA_FAIL,
} from '../actions/ActionTypes';

const initialState = {
  isFetching: null,
  data: [],
  hasError: false,
  errorMessage: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_COINS_LIST_DATA:
      return {
        ...state,
        isFetching: true,
        data: null,
        hasError: false,
        errorMessage: null,
      };
    case FETCH_COINS_LIST_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
        hasError: false,
        errorMessage: null,
      };
    case FETCH_COINS_LIST_DATA_FAIL:
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
