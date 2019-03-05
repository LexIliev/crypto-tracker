import { combineReducers } from 'redux';
import CryptoReducer from './CryptoReducer';
import CryptoDetailsReducer from './CryptoDetailsReducer';

export default combineReducers({
  cryptoList: CryptoReducer,
  cryptoDetails: CryptoDetailsReducer,
});
