import {
  GET_REFERRAL_DATA,
  GET_REFERRAL_DATA_SUCCESS,
  GET_REFERRAL_DATA_FAILURE,
  GET_REFERRAL_HISTORY,
  GET_REFERRAL_HISTORY_SUCCESS,
  GET_REFERRAL_HISTORY_FAILURE,
  GET_REWARD_HISTORY,
  GET_REWARD_HISTORY_SUCCESS,
  GET_REWARD_HISTORY_FAILURE,
  GET_MARKET_PAIR,
  GET_MARKET_PAIR_SUCCESS,
  GET_MARKET_PAIR_FAILURE,
} from '../actions/actionTypes';

const INIT_STATE = {
  getReferralDataLoading: false,
  referralData: {},
  getReferralHistoryLoading: false,
  referralHistoryData: [],
  getRewardHistoryLoading: false,
  referralRewardData: [],
  marketPairData: [],
};

const referAndEarnReducer = (state = INIT_STATE, action) => {
  switch (action.type) {    

    case GET_REFERRAL_DATA:
      return {
        ...state,
        referralData: {},
        getReferralDataLoading: true,
      };
    case GET_REFERRAL_DATA_SUCCESS:
      return {
        ...state,
        referralData: action.payload || {},
        getReferralDataLoading: false,
      };
    case GET_REFERRAL_DATA_FAILURE:
      return {
        ...state,
        referralData: {},
        getReferralDataLoading: false,
      };

    case GET_REFERRAL_HISTORY:
      return {
        ...state,
        referralHistoryData: [],
        getReferralHistoryLoading: true,
      };
    case GET_REFERRAL_HISTORY_SUCCESS:
      return {
        ...state,
        referralHistoryData: action.payload || [],
        getReferralHistoryLoading: false,
      };
    case GET_REFERRAL_HISTORY_FAILURE:
      return {
        ...state,
        referralHistoryData: [],
        getReferralHistoryLoading: false,
      };

    case GET_REWARD_HISTORY:
      return {
        ...state,
        referralRewardData: [],
        getReferralDataLoading: true,
      };
    case GET_REWARD_HISTORY_SUCCESS:
      return {
        ...state,
        referralRewardData: action.payload || [],
        getReferralDataLoading: false,
      };
    case GET_REWARD_HISTORY_FAILURE:
      return {
        ...state,
        referralRewardData: [],
        getReferralDataLoading: false,
      };

    case GET_MARKET_PAIR:
      return {
        ...state,
        marketPairData: [],
      };
    case GET_MARKET_PAIR_SUCCESS:
      return {
        ...state,
        marketPairData: action.payload || [],
      };
    case GET_MARKET_PAIR_FAILURE:
      return {
        ...state,
        marketPairData: [],
      };

    default:
      return state;
  }
};

export default referAndEarnReducer;
