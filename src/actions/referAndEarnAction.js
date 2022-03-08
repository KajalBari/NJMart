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
  } from './actionTypes';
  import {axiosGetWithToken, axiosPostWithToken} from '../services/apiServices';
  import {API} from '../config/api';
  import store from '../services/storageServices';
  import {setSnackAlert} from './commonActions';
  
  const getReferralData = () => {
    return async dispatch => {
      dispatch({
        type: GET_REFERRAL_DATA,
        payload: {},
      });
      const userData = await store.get('userData');
      const token = userData?.jwtToken;
      axiosGetWithToken(API.GET_REFERRAL, token)
        .then(async res => {
          if (res.status === 200) {
            await dispatch({
              type: GET_REFERRAL_DATA_SUCCESS,
              payload: res.data,
            });
          } else {
            dispatch({
              type: GET_REFERRAL_DATA_FAILURE,
              payload: {},
            });
            dispatch(
              setSnackAlert(
                res?.data?.message || 'Something went wrong. Please try again.',
              ),
            );
          }
        })
        .catch(err => {
          dispatch({
            type: GET_REFERRAL_DATA_FAILURE,
            payload: err,
          });
          dispatch(setSnackAlert('Something went wrong. Please try again.'));
        });
    };
  };
  
  const getReferralHistoryData = () => {
    return async dispatch => {
      dispatch({
        type: GET_REFERRAL_HISTORY,
        payload: {},
      });
      const userData = await store.get('userData');
      const token = userData?.jwtToken;
      axiosGetWithToken(API.GET_REFERRAL_HISTORY, token)
        .then(async res => {
          if (res.status === 200) {
            await dispatch({
              type: GET_REFERRAL_HISTORY_SUCCESS,
              payload: res.data,
            });
          } else {
            dispatch({
              type: GET_REFERRAL_HISTORY_FAILURE,
              payload: {},
            });
            dispatch(
              setSnackAlert(
                res?.data?.message || 'Something went wrong. Please try again.',
              ),
            );
          }
        })
        .catch(err => {
          dispatch({
            type: GET_REFERRAL_HISTORY_FAILURE,
            payload: err,
          });
          dispatch(setSnackAlert('Something went wrong. Please try again.'));
        });
    };
  };
  
  const getRewardHistoryData = (coin) => {
    return async dispatch => {
      dispatch({
        type: GET_REWARD_HISTORY,
        payload: {},
      });
      const userData = await store.get('userData');
      const token = userData?.jwtToken;
      axiosGetWithToken(`${API.GET_REWARD_HISTORY}/${coin || '0/0'}`, token)
        .then(async res => {
          if (res.status === 200) {
            await dispatch({
              type: GET_REWARD_HISTORY_SUCCESS,
              payload: res.data,
            });
          } else {
            dispatch({
              type: GET_REWARD_HISTORY_FAILURE,
              payload: {},
            });
            dispatch(
              setSnackAlert(
                res?.data?.message || 'Something went wrong. Please try again.',
              ),
            );
          }
        })
        .catch(err => {
          dispatch({
            type: GET_REWARD_HISTORY_FAILURE,
            payload: err,
          });
          dispatch(setSnackAlert('Something went wrong. Please try again.'));
        });
    };
  };
  
  const getMarketPairData = () => {
    return async dispatch => {
      dispatch({
        type: GET_MARKET_PAIR,
        payload: {},
      });
      const userData = await store.get('userData');
      const token = userData?.jwtToken;
      axiosGetWithToken(API.GET_MARKET_PAIR, token)
        .then(async res => {
          if (res.status === 200) {
            await dispatch({
              type: GET_MARKET_PAIR_SUCCESS,
              payload: res.data,
            });
          } else {
            dispatch({
              type: GET_MARKET_PAIR_FAILURE,
              payload: {},
            });
            dispatch(
              setSnackAlert(
                res?.data?.message || 'Something went wrong. Please try again.',
              ),
            );
          }
        })
        .catch(err => {
          dispatch({
            type: GET_MARKET_PAIR_FAILURE,
            payload: err,
          });
          dispatch(setSnackAlert('Something went wrong. Please try again.'));
        });
    };
  };
  
  export {getReferralData, getReferralHistoryData, getRewardHistoryData, getMarketPairData};
  