import {combineReducers} from 'redux';
import commonReducer from './commonReducer';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import homeReducer from './homeReducer';
import supportReducer from './supportReducer';
import walletReducer from './walletReducer';
import exchangeReducer from './exchangeReducer';
import depositWithdrawReducer from './depositWithdrawReducer';
import referAndEarnReducer from './referAndEarnReducer';
import notificationReducer from './notificationReducer';

const rootReducer = combineReducers({
  common: commonReducer,
  auth: authReducer,
  profile: profileReducer,
  home: homeReducer,
  support: supportReducer,
  wallet: walletReducer,
  exchange: exchangeReducer,
  depositWithdraw: depositWithdrawReducer,
  referAndEarn: referAndEarnReducer,
  notification: notificationReducer,
});

export default rootReducer;
