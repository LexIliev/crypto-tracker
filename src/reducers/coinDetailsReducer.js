import {
  FETCH_COIN_DETAILS,
  FETCH_COIN_DETAILS_SUCCESS,
  FETCH_COIN_DETAILS_FAIL,
} from '../actions/ActionTypes';

const initialState = {
  isFetching: false,
  data: {},
  hasError: false,
  errorMessage: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_COIN_DETAILS:
      return {
        ...state,
        isFetching: true,
        data: {},
        hasError: false,
        errorMessage: null,
      };
    case FETCH_COIN_DETAILS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data[0],
        hasError: false,
        errorMessage: null,
      };
    case FETCH_COIN_DETAILS_FAIL:
      return {
        ...state,
        isFetching: false,
        data: {},
        hasError: true,
        errorMessage: action.err,
      };
    default:
      return state;
  }
}
