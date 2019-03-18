import { combineReducers } from 'redux';
import coinsListReducer from './coinsListReducer';
import coinDetailsReducer from './coinDetailsReducer';

export default combineReducers({
  coinsList: coinsListReducer,
  coinDetails: coinDetailsReducer,
});
